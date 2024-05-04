// Imports
// =================================
import type { ApmCreateType, ApmRetrieveType } from "@/types/models";
import baseRequest from "@/utils/baseRequest";
import { formatPrice } from "@/utils/utils";
import { baseClient } from "@/client";

/**
 * @dev EN:
 * @dev TR:
 * @param client
 * @returns
 */
export default function (client: ReturnType<typeof baseClient>) {
  return {
    /**
     * @dev EN: Create a new checkout form
     * @dev TR: Yeni bir ödeme formu oluştur
     * @param payload
     */
    create: (payload?: ApmCreateType) =>
      baseRequest(client, {
        endpoint: "/payment/apm/initialize",
        method: "POST",
        body: {
          locale: payload?.["locale"],
          conversationId: payload?.["conversationId"],
          price: payload?.["price"]
            ? formatPrice(payload?.["price"])
            : undefined,
          paidPrice: payload?.["paidPrice"]
            ? formatPrice(payload?.["paidPrice"])
            : undefined,
          paymentChannel: payload?.["paymentChannel"],
          paymentGroup: payload?.["paymentGroup"],
          paymentSource: payload?.["paymentSource"],
          currency: payload?.["currency"],
          merchantOrderId: payload?.["merchantOrderId"],
          countryCode: payload?.["countryCode"],
          accountHolderName: payload?.["accountHolderName"],
          merchantCallbackUrl: payload?.["merchantCallbackUrl"],
          merchantErrorUrl: payload?.["merchantErrorUrl"],
          merchantNotificationUrl: payload?.["merchantNotificationUrl"],
          apmType: payload?.["apmType"],
          basketId: payload?.["basketId"],
          buyer: payload?.["buyer"]
            ? {
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
              }
            : undefined,
          shippingAddress: payload?.["shippingAddress"]
            ? {
                address: payload["shippingAddress"]?.["address"],
                zipCode: payload["shippingAddress"]?.["zipCode"],
                contactName: payload["shippingAddress"]?.["contactName"],
                city: payload["shippingAddress"]?.["city"],
                country: payload["shippingAddress"]?.["country"],
              }
            : undefined,
          billingAddress: payload?.["billingAddress"]
            ? {
                address: payload["billingAddress"]?.["address"],
                zipCode: payload["billingAddress"]?.["zipCode"],
                contactName: payload["billingAddress"]?.["contactName"],
                city: payload["billingAddress"]?.["city"],
                country: payload["billingAddress"]?.["country"],
              }
            : undefined,
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
        },
      }),
    /**
     * @dev EN: Retrieve a checkout form
     * @dev TR: Bir ödeme formunu getir
     * @param payload
     */
    retrieve: (payload?: ApmRetrieveType) =>
      baseRequest(client, {
        endpoint: "/payment/apm/retrieve",
        method: "POST",
        body: {
          locale: payload?.locale,
          conversationId: payload?.conversationId,
          paymentId: payload?.paymentId,
        },
      }),
  };
}
