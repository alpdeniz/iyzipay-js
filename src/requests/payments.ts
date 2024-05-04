// Imports
// =================================
import type {
  PaymentCreateType,
  BkmCreateType,
  BkmRetreieveType,
  PaymentRetrieveType,
  PaymentCreateAltType,
  PaymentRefundType,
  PaymentCancelType,
  CheckoutFormCreateType,
  CheckoutFormRetrieveType,
} from "@/types/models";
import baseRequest from "@/utils/baseRequest";
import { formatPrice } from "@/utils/utils";
import { baseClient } from "@/client";
import { create } from "domain";
import iyzico from "..";
import {
  paymentChannel,
  installments,
  paymentSource,
  currency,
  baseItemType,
  locale,
  paymentGroup,
} from "@/utils/constants";

/**
 * @dev EN:
 * @dev TR:
 * @param client
 * @returns
 */
export default function (client: ReturnType<typeof baseClient>) {
  return {
    /**
     * @dev EN:
     * @dev TR:
     * @param payload
     */
    create: (payload: PaymentCreateAltType) =>
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
                registerConsumerCard: payload["paymentCard"]?.["registerConsumerCard"],
                ucsToken: payload["paymentCard"]?.["ucsToken"],
            }
            ,
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
            }
            ,
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
    refund: (payload: PaymentRefundType) => baseRequest(client, {
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
          currency: payload?.["currency"] && Object.values(currency).includes(payload["currency"]) ? payload["currency"] : undefined,
          reason: payload?.["reason"],
          description: payload?.["description"],
      }
    }),
    /**
     * 
     * @param payload 
     * @returns 
     */
    cancel: (payload: PaymentCancelType) => baseRequest(client, {
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
      }
    }),
    threeDSecure: {
      create: () => {},
      retrieve: () => {},
    },
    iyzico: {
      create: () => {},
      retrieve: () => {},
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
      create: (payload: CheckoutFormCreateType) => baseRequest(client, {
        endpoint: "/payment/iyzipos/checkoutform/initialize/auth/ecom",
        method: "POST",
        body: {
          locale:
              payload?.["locale"] &&
              Object.values(locale).includes(payload["locale"])
                ? payload["locale"]
                : undefined,
          conversationId: payload?.["conversationId"],
          price: payload?.['price'] ? formatPrice(payload['price']) : undefined,
          basketId: payload?.['basketId'],
          paymentGroup: payload?.['paymentGroup'],
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
            ip: payload["buyer"]?.["ip"]
          },
          shippingAddress: {
            address: payload["shippingAddress"]?.["address"],
            zipCode: payload["shippingAddress"]?.["zipCode"],
            contactName: payload["shippingAddress"]?.["contactName"],
            city: payload["shippingAddress"]?.["city"],
            country: payload["shippingAddress"]?.["country"]
          },
          billingAddress: {
            address: payload["billingAddress"]?.["address"],
            zipCode: payload["billingAddress"]?.["zipCode"],
            contactName: payload["billingAddress"]?.["contactName"],
            city: payload["billingAddress"]?.["city"],
            country: payload["billingAddress"]?.["country"]
          },
          basketItems: payload?.["basketItems"]?.map((basketItem) => ({
            id: basketItem?.["id"],
            price: basketItem?.["price"] ? formatPrice(basketItem["price"]) : undefined,
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
          paidPrice: payload?.["paidPrice"] ? formatPrice(payload["paidPrice"]) : undefined,
          enabledInstallments: payload?.["enabledInstallments"],
          posOrderId: payload?.["posOrderId"],
          forceThreeDS: payload?.["forceThreeDS"],
          cardUserKey: payload?.["cardUserKey"],
          // paymentSource: payload?.["paymentSource"],
          // paymentChannel: payload?.["paymentChannel"],
        }
      }),
      /**
       * @dev WARNING! This method isn't working properly.
       * @param payload 
       * @returns 
       */
      retrieve: (payload: CheckoutFormRetrieveType) => baseRequest(client, {
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
        }
      }),
    },
    // createBasic: (payload?: BkmCreateBasicType) => {
    // },
    // cancel: (payload?: any) => {

    // },
    // threeDSecure: {
    //   create: () => {
    //   },
    //   retrieve: () => {
    //   },
    // }
  };
}
