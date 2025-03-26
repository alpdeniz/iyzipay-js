// Imports
// =================================
import type {
  BkmCreateType,
  PaymentRetrieveType,
  PaymentRefundType,
  PaymentCancelType,
  CheckoutFormCreateType,
  CheckoutFormRetrieveType,
  BinCheckType,
  BkmRetrieveType,
  Payment3DSecureCreateType,
  Payment3DSecureRetrieveType,
  PaymentCreateType,
  IyziposRetrieveInstallmentInfoType,
  ApmCreateType,
  ApmRetrieveType,
  IyziposCreateApprovalType,
} from "../types/models";
import baseRequest from "../utils/baseRequest";
import { formatPrice } from "../utils/utils";
import { baseClient } from "../client";
import { currency, locale } from "../utils/constants";

// Main Request Object
// =================================
/**
 * @dev EN:
 * @dev TR:
 * @param client
 * @returns
 */
export default function (client: ReturnType<typeof baseClient>) {
  return {
    /**
     * 
     */
    apm: {
      /**
       * 
       * @param payload 
       * @returns 
       */
      create: (payload: ApmCreateType) => 
        baseRequest(client, {
          endpoint: "/payment/apm/initialize",
          method: "POST",
          body: {
            locale: payload?.['locale'],
            conversationId: payload?.['conversationId'],
            price: formatPrice(payload['price']),
            paidPrice: formatPrice(payload['paidPrice']),
            paymentChannel: payload?.['paymentChannel'],
            paymentGroup: payload?.['paymentGroup'],
            paymentSource: payload?.['paymentSource'],
            currency: payload?.['currency'],
            merchantOrderId: payload?.['merchantOrderId'],
            countryCode: payload?.['countryCode'],
            accountHolderName: payload?.['accountHolderName'],
            merchantCallbackUrl: payload?.['merchantCallbackUrl'],
            merchantErrorUrl: payload?.['merchantErrorUrl'],
            merchantNotificationUrl: payload?.['merchantNotificationUrl'],
            apmType: payload?.['apmType'],
            basketId: payload?.['basketId'],
            buyer: {
              id: payload?.['buyer']?.['id'],
              name: payload?.['buyer']?.['name'],
              surname: payload?.['buyer']?.['surname'],
              identityNumber: payload?.['buyer']?.['identityNumber'],
              email: payload?.['buyer']?.['email'],
              gsmNumber: payload?.['buyer']?.['gsmNumber'],
              registrationDate: payload?.['buyer']?.['registrationDate'],
              lastLoginDate: payload?.['buyer']?.['lastLoginDate'],
              registrationAddress: payload?.['buyer']?.['registrationAddress'],
              city: payload?.['buyer']?.['city'],
              country: payload?.['buyer']?.['country'],
              zipCode: payload?.['buyer']?.['zipCode'],
              ip: payload?.['buyer']?.['ip'],
            },
            shippingAddress: {
              address: payload?.['shippingAddress']?.['address'],
              zipCode: payload?.['shippingAddress']?.['zipCode'],
              contactName: payload?.['shippingAddress']?.['contactName'],
              city: payload?.['shippingAddress']?.['city'],
              country: payload?.['shippingAddress']?.['country'],
            },
            billingAddress: {
              address: payload?.['billingAddress']?.['address'],
              zipCode: payload?.['billingAddress']?.['zipCode'],
              contactName: payload?.['billingAddress']?.['contactName'],
              city: payload?.['billingAddress']?.['city'],
              country: payload?.['billingAddress']?.['country'],
            
            },
            basketItems: payload?.['basketItems']?.map((basketItem) => ({
              id: basketItem?.['id'],
              price: formatPrice(basketItem['price']),
              name: basketItem?.['name'],
              category1: basketItem?.['category1'],
              category2: basketItem?.['category2'],
              itemType: basketItem?.['itemType'],
              quantity: basketItem?.['quantity'],
              subMerchantKey: basketItem?.['subMerchantKey'],
              subMerchantPrice: basketItem?.['subMerchantPrice'] ? formatPrice(basketItem['subMerchantPrice']) : undefined,
            })),
          },
        }),
      /**
       * 
       * @param payload 
       * @returns 
       */
      retrieve: (payload: ApmRetrieveType) => 
        baseRequest(client, {
          endpoint: "/payment/apm/retrieve",
          method: "POST",
          body: {
            locale: payload?.["locale"],
            conversationId: payload?.["conversationId"],
            paymentId: payload["paymentId"],
          },
        }),
    },
    /**
     * @dev EN: Checks the BIN number of a card from the first 6 digits of the card
     * @dev TR: Kartın ilk 6 hanesinden BIN numarasını kontrol eder
     */
    binCheck: (payload: BinCheckType) =>
      baseRequest(client, {
        endpoint: "/payment/bin/check",
        method: "POST",
        body: {
          locale: payload?.["locale"],
          conversationId: payload?.["conversationId"],
          binNumber: payload["binNumber"],
        },
      }),
    /**
     * @dev EN: Creates BKM payment
     * @dev TR:
     */
    bkm: {
      // /**
      //  * @dev EN: NOT WORKING - Creates a basic BKM payment
      //  * @dev TR: Çalışmıyor - Temel bir BKM ödemesi oluşturur
      //  * @param payload 
      //  * @returns 
      //  */
      // createBasic: (payload: BkmCreateBasicType) =>
      //   baseRequest(client, {
      //     endpoint: "/payment/bkm/initialize/basic",
      //     method: "POST",
      //     body: {
      //       locale: payload?.['locale'],
      //       conversationId: payload?.['conversationId'],
      //       connectorName: payload['connectorName'],
      //       price: formatPrice(payload['price']),
      //       callbackUrl: payload?.['callbackUrl'],
      //       buyerEmail: payload['buyerEmail'],
      //       buyerId: payload['buyerId'],
      //       buyerIp: payload?.['buyerIp'],
      //       posOrderId: payload?.['posOrderId'],
      //       installmentDetails: payload['installmentsDetails'].map((installmentDetail) => ({
      //         bankId: installmentDetail['bankId'],
      //         installmentPrices: installmentDetail['installmentPrices'].map((installmentPrice) => ({
      //           installmentNumber: installmentPrice['installmentNumber'],
      //           totalPrice: formatPrice(installmentPrice['totalPrice']),
      //         }))
      //       })),
      //     },
      //   }),
      /**
       * @dev EN: Creates a BKM payment
       * @dev TR: Bir BKM ödemesi oluşturur
       * @param payload
       * @returns
       */
      create: (payload: BkmCreateType) =>
        baseRequest(client, {
          endpoint: "/payment/bkm/initialize",
          method: "POST",
          body: {
            locale: payload?.["locale"],
            conversationId: payload?.["conversationId"],
            price: formatPrice(payload["price"]),
            basketId: payload?.["basketId"],
            paymentGroup: payload?.["paymentGroup"],
            buyer: {
              id: payload["buyer"]["id"],
              name: payload["buyer"]["name"],
              surname: payload["buyer"]["surname"],
              identityNumber: payload["buyer"]["identityNumber"],
              email: payload["buyer"]["email"],
              gsmNumber: payload["buyer"]["gsmNumber"],
              registrationDate: payload["buyer"]?.["registrationDate"],
              lastLoginDate: payload["buyer"]?.["lastLoginDate"],
              registrationAddress: payload["buyer"]?.["registrationAddress"],
              city: payload["buyer"]?.["city"],
              country: payload["buyer"]?.["country"],
              zipCode: payload["buyer"]?.["zipCode"],
              ip: payload["buyer"]?.["ip"],
            },
            shippingAddress: {
              address: payload["shippingAddress"]["address"],
              zipCode: payload["shippingAddress"]?.["zipCode"],
              contactName: payload["shippingAddress"]["contactName"],
              city: payload["shippingAddress"]["city"],
              country: payload["shippingAddress"]["country"],
            },
            billingAddress: {
              address: payload["billingAddress"]["address"],
              zipCode: payload["billingAddress"]?.["zipCode"],
              contactName: payload["billingAddress"]["contactName"],
              city: payload["billingAddress"]["city"],
              country: payload["billingAddress"]["country"],
            },
            basketItems: payload["basketItems"].map((basketItem) => ({
              id: basketItem["id"],
              price: formatPrice(basketItem["price"]),
              name: basketItem["name"],
              category1: basketItem?.["category1"],
              category2: basketItem?.["category2"],
              itemType: basketItem["itemType"],
              subMerchantKey: basketItem["subMerchantKey"],
              subMerchantPrice: basketItem["subMerchantPrice"],
            })),
            callbackUrl: payload?.["callbackUrl"],
            paymentSource: payload?.["paymentSource"],
            enabledInstallments: payload?.["enabledInstallments"],
          },
        }),
      /**
       *
       * @param payload
       * @returns
       */
      retrieve: (payload: BkmRetrieveType) =>
        baseRequest(client, {
          endpoint: "/payment/bkm/auth/detail",
          method: "POST",
          body: {
            locale: payload?.["locale"],
            conversationId: payload?.["conversationId"],
            token: payload["token"],
          },
        }),
    },
    /**
     * @dev EN:
     * @dev TR:
     * @param payload
     */
    create: (payload: PaymentCreateType) =>
      baseRequest(client, {
        endpoint: "/payment/auth",
        method: "POST",
        body: {
          locale: payload?.["locale"],
          conversationId: payload?.["conversationId"],
          price: payload?.["price"],
          paidPrice: payload?.["paidPrice"],
          installment: payload?.["installment"],
          paymentChannel: payload?.["paymentChannel"],
          basketId: payload?.["basketId"],
          paymentGroup: payload?.["paymentGroup"],
          paymentCard: {
            cardHolderName: payload["paymentCard"]?.["cardHolderName"],
            cardNumber: payload["paymentCard"]?.["cardNumber"],
            expireYear: payload["paymentCard"]?.["expireYear"],
            expireMonth: payload["paymentCard"]?.["expireMonth"],
            cvc: payload["paymentCard"]?.["cvc"],
            registerCard: payload["paymentCard"]?.["registerCard"],
            cardAlias: payload["paymentCard"]?.["cardAlias"],
            cardToken: payload["paymentCard"]?.["cardToken"],
            cardUserKey: payload["paymentCard"]?.["cardUserKey"],
            consumerToken: payload["paymentCard"]?.["consumerToken"],
            registerConsumerCard:
              payload["paymentCard"]?.["registerConsumerCard"],
            ucsToken: payload["paymentCard"]?.["ucsToken"],
          },
          buyer: {
            id: payload["buyer"]?.["id"],
            name: payload["buyer"]?.["name"],
            surname: payload["buyer"]?.["surname"],
            identityNumber: payload["buyer"]?.["identityNumber"],
            email: payload["buyer"]?.["email"],
            gsmNumber: payload["buyer"]?.["gsmNumber"],
            registrationDate: payload["buyer"]?.["registrationDate"],
            lastLoginDate: payload["buyer"]?.["lastLoginDate"],
            registrationAddress: payload["buyer"]?.["registrationAddress"],
            city: payload["buyer"]?.["city"],
            country: payload["buyer"]?.["country"],
            zipCode: payload["buyer"]?.["zipCode"],
            ip: payload["buyer"]?.["ip"],
          },
          shippingAddress: {
            address: payload["shippingAddress"]?.["address"],
            zipCode: payload["shippingAddress"]?.["zipCode"],
            contactName: payload["shippingAddress"]?.["contactName"],
            city: payload["shippingAddress"]?.["city"],
            country: payload["shippingAddress"]?.["country"],
          },
          billingAddress: {
            address: payload["billingAddress"]?.["address"],
            zipCode: payload["billingAddress"]?.["zipCode"],
            contactName: payload["billingAddress"]?.["contactName"],
            city: payload["billingAddress"]?.["city"],
            country: payload["billingAddress"]?.["country"],
          },
          basketItems: payload["basketItems"].map((basketItem) => ({
            id: basketItem["id"],
            price: basketItem["price"],
            name: basketItem["name"],
            category1: basketItem?.["category1"],
            category2: basketItem?.["category2"],
            itemType: basketItem["itemType"],
            quantity: basketItem?.["quantity"],
            subMerchantKey: basketItem?.["subMerchantKey"],
            subMerchantPrice: basketItem?.["subMerchantPrice"],
          })),
          paymentSource: payload?.["paymentSource"],
          currency: payload?.["currency"],
          gsmNumber: payload?.["gsmNumber"],
          posOrderId: payload?.["posOrderId"],
          connectorName: payload?.["connectorName"],
          callbackUrl: payload?.["callbackUrl"],
        },
      }),
    /**
     *
     * @param payload
     * @returns
     */
    retrieve: (payload: PaymentRetrieveType) =>
      baseRequest(client, {
        endpoint: "/payment/detail",
        method: "POST",
        body: {
          locale:
            payload?.["locale"] &&
            Object.values(locale).includes(payload["locale"])
              ? payload["locale"]
              : undefined,
          conversationId: payload?.["conversationId"],
          paymentId: payload?.["paymentId"],
          paymentConversationId: payload?.["paymentConversationId"],
        },
      }),
    /**
     *
     * @param payload
     * @returns
     */
    refund: (payload: PaymentRefundType) =>
      baseRequest(client, {
        endpoint: "/payment/refund",
        method: "POST",
        body: {
          locale:
            payload?.["locale"] &&
            Object.values(locale).includes(payload["locale"])
              ? payload["locale"]
              : undefined,
          conversationId: payload?.["conversationId"],
          paymentTransactionId: payload?.["paymentTransactionId"],
          price: payload?.["price"] ? formatPrice(payload["price"]) : undefined,
          ip: payload?.["ip"],
          currency:
            payload?.["currency"] &&
            Object.values(currency).includes(payload["currency"])
              ? payload["currency"]
              : undefined,
          reason: payload?.["reason"],
          description: payload?.["description"],
        },
      }),
    /**
     *
     * @param payload
     * @returns
     */
    cancel: (payload: PaymentCancelType) =>
      baseRequest(client, {
        endpoint: "/payment/cancel",
        method: "POST",
        body: {
          locale:
            payload?.["locale"] &&
            Object.values(locale).includes(payload["locale"])
              ? payload["locale"]
              : undefined,
          conversationId: payload?.["conversationId"],
          paymentId: payload?.["paymentId"],
          ip: payload?.["ip"],
        },
      }),
    threeDSecure: {
      create: (payload: Payment3DSecureCreateType) =>
        baseRequest(client, {
          endpoint: "/payment/3dsecure/initialize",
          method: "POST",
          body: {
            locale: payload?.["locale"],
            conversationId: payload?.["conversationId"],
            price: payload["price"],
            paidPrice: payload["paidPrice"],
            installment: payload?.["installment"],
            paymentChannel: payload["paymentChannel"],
            basketId: payload?.["basketId"],
            paymentGroup: payload?.["paymentGroup"],
            paymentCard: {
              cardHolderName: payload["paymentCard"]?.["cardHolderName"],
              cardNumber: payload["paymentCard"]?.["cardNumber"],
              expireYear: payload["paymentCard"]?.["expireYear"],
              expireMonth: payload["paymentCard"]?.["expireMonth"],
              cvc: payload["paymentCard"]?.["cvc"],
              registerCard: payload["paymentCard"]?.["registerCard"],
              cardAlias: payload["paymentCard"]?.["cardAlias"],
              cardToken: payload["paymentCard"]?.["cardToken"],
              cardUserKey: payload["paymentCard"]?.["cardUserKey"],
              consumerToken: payload["paymentCard"]?.["consumerToken"],
              registerConsumerCard:
                payload["paymentCard"]?.["registerConsumerCard"],
              ucsToken: payload["paymentCard"]?.["ucsToken"],
            },
            buyer: {
              id: payload["buyer"]?.["id"],
              name: payload["buyer"]?.["name"],
              surname: payload["buyer"]?.["surname"],
              identityNumber: payload["buyer"]?.["identityNumber"],
              email: payload["buyer"]?.["email"],
              gsmNumber: payload["buyer"]?.["gsmNumber"],
              registrationDate: payload["buyer"]?.["registrationDate"],
              lastLoginDate: payload["buyer"]?.["lastLoginDate"],
              registrationAddress: payload["buyer"]?.["registrationAddress"],
              city: payload["buyer"]?.["city"],
              country: payload["buyer"]?.["country"],
              zipCode: payload["buyer"]?.["zipCode"],
              ip: payload["buyer"]?.["ip"],
            },
            shippingAddress: {
              address: payload["shippingAddress"]?.["address"],
              zipCode: payload["shippingAddress"]?.["zipCode"],
              contactName: payload["shippingAddress"]?.["contactName"],
              city: payload["shippingAddress"]?.["city"],
              country: payload["shippingAddress"]?.["country"],
            },
            billingAddress: {
              address: payload["billingAddress"]?.["address"],
              zipCode: payload["billingAddress"]?.["zipCode"],
              contactName: payload["billingAddress"]?.["contactName"],
              city: payload["billingAddress"]?.["city"],
              country: payload["billingAddress"]?.["country"],
            },
            basketItems: payload["basketItems"].map((basketItem) => ({
              id: basketItem["id"],
              price: basketItem["price"],
              name: basketItem["name"],
              category1: basketItem?.["category1"],
              category2: basketItem?.["category2"],
              itemType: basketItem["itemType"],
              quantity: basketItem?.["quantity"],
              subMerchantKey: basketItem?.["subMerchantKey"],
              subMerchantPrice: basketItem?.["subMerchantPrice"],
            })),
            paymentSource: payload?.["paymentSource"],
            currency: payload?.["currency"],
            gsmNumber: payload?.["gsmNumber"],
            posOrderId: payload?.["posOrderId"],
            connectorName: payload?.["connectorName"],
            callbackUrl: payload?.["callbackUrl"],
          },
        }),
      retrieve: (payload: Payment3DSecureRetrieveType) =>
        baseRequest(client, {}),
    },
    iyzipos: {
      /**
       * 
       * @param payload 
       * @returns 
       */
      createApproval: (payload: IyziposCreateApprovalType) => 
        baseRequest(client, {
          endpoint: "/payment/iyzipos/item/approve",
          method: "POST",
          body: {
            locale:
              payload?.["locale"] &&
              Object.values(locale).includes(payload["locale"])
                ? payload["locale"]
                : undefined,
            conversationId: payload?.["conversationId"],
            paymentTransactionId: payload["paymentTransactionId"],
          },
        }),
      // createDisapproval: () => {},
      // createCheckoutForm: () => {},
      // createCheckoutFormPreAuth: () => {},
      // retrieveCheckoutForm: () => {},
      // retrieveInstallmentHorizonal: () => {}, ??? flag
      // refundChargeFromMerchant
      retrieveInstallmentInfo: (payload: IyziposRetrieveInstallmentInfoType) =>
        baseRequest(client, {
          endpoint: "/payment/iyzipos/installment",
          method: "POST",
          body: {
            locale:
              payload?.["locale"] &&
              Object.values(locale).includes(payload["locale"])
                ? payload["locale"]
                : undefined,
            conversationId: payload?.["conversationId"],
            binNumber: payload["binNumber"],
            price: payload["price"],
            currency: payload["currency"],
          },
        }),
    },
    /**
     *
     */
    checkoutForm: {
      /**
       *
       * @param payload
       * @returns
       */
      create: (payload: CheckoutFormCreateType) =>
        baseRequest(client, {
          endpoint: "/payment/iyzipos/checkoutform/initialize/auth/ecom",
          method: "POST",
          body: {
            locale:
              payload?.["locale"] &&
              Object.values(locale).includes(payload["locale"])
                ? payload["locale"]
                : undefined,
            conversationId: payload?.["conversationId"],
            price: payload?.["price"]
              ? formatPrice(payload["price"])
              : undefined,
            basketId: payload?.["basketId"],
            paymentGroup: payload?.["paymentGroup"],
            buyer: {
              id: payload["buyer"]?.["id"],
              name: payload["buyer"]?.["name"],
              surname: payload["buyer"]?.["surname"],
              identityNumber: payload["buyer"]?.["identityNumber"],
              email: payload["buyer"]?.["email"],
              gsmNumber: payload["buyer"]?.["gsmNumber"],
              registrationDate: payload["buyer"]?.["registrationDate"],
              lastLoginDate: payload["buyer"]?.["lastLoginDate"],
              registrationAddress: payload["buyer"]?.["registrationAddress"],
              city: payload["buyer"]?.["city"],
              country: payload["buyer"]?.["country"],
              zipCode: payload["buyer"]?.["zipCode"],
              ip: payload["buyer"]?.["ip"],
            },
            shippingAddress: {
              address: payload["shippingAddress"]?.["address"],
              zipCode: payload["shippingAddress"]?.["zipCode"],
              contactName: payload["shippingAddress"]?.["contactName"],
              city: payload["shippingAddress"]?.["city"],
              country: payload["shippingAddress"]?.["country"],
            },
            billingAddress: {
              address: payload["billingAddress"]?.["address"],
              zipCode: payload["billingAddress"]?.["zipCode"],
              contactName: payload["billingAddress"]?.["contactName"],
              city: payload["billingAddress"]?.["city"],
              country: payload["billingAddress"]?.["country"],
            },
            basketItems: payload?.["basketItems"]?.map((basketItem) => ({
              id: basketItem?.["id"],
              price: basketItem?.["price"]
                ? formatPrice(basketItem["price"])
                : undefined,
              name: basketItem?.["name"],
              category1: basketItem?.["category1"],
              category2: basketItem?.["category2"],
              itemType: basketItem?.["itemType"],
              subMerchantKey: basketItem?.["subMerchantKey"],
              subMerchantPrice: basketItem?.["subMerchantPrice"]
                ? formatPrice(basketItem["subMerchantPrice"])
                : undefined,
            })),
            callbackUrl: payload?.["callbackUrl"],
            currency: payload?.["currency"],
            paidPrice: payload?.["paidPrice"]
              ? formatPrice(payload["paidPrice"])
              : undefined,
            enabledInstallments: payload?.["enabledInstallments"],
            posOrderId: payload?.["posOrderId"],
            forceThreeDS: payload?.["forceThreeDS"],
            cardUserKey: payload?.["cardUserKey"],
            // paymentSource: payload?.["paymentSource"],
            // paymentChannel: payload?.["paymentChannel"],
          },
        }),
      /**
       * @dev WARNING! This method isn't working properly.
       * @param payload
       * @returns
       */
      retrieve: (payload: CheckoutFormRetrieveType) =>
        baseRequest(client, {
          endpoint: "/payment/iyzipos/checkoutform/auth/ecom/detail",
          method: "POST",
          body: {
            locale:
              payload?.["locale"] &&
              Object.values(locale).includes(payload["locale"])
                ? payload["locale"]
                : undefined,
            conversationId: payload?.["conversationId"],
            token: payload?.["token"],
          },
        }),
    },
  };
}
