// Imports
// =================================
import type { BkmCreateBasicType, BkmCreateType, BkmRetrieveType } from "@/types/models";
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
     * @dev EN:
     * @dev TR:
     * @param payload
     */
    create: (
      payload?: BkmCreateType) =>
      baseRequest(client, {
        endpoint: "/payment/bkm/initialize",
        method: "POST",
        body: {
          locale: payload?.["locale"],
          conversationId: payload?.["conversationId"],
          price: payload?.["price"]
            ? formatPrice(payload?.["price"])
            : undefined,
          basketId: payload?.["basketId"],
          paymentGroup: payload?.["paymentGroup"],
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
            name: basketItem?.["name"],
            category1: basketItem?.["category1"],
            category2: basketItem?.["category2"],
            itemType: basketItem?.["itemType"],
            price: basketItem?.["price"] ? formatPrice(basketItem["price"]) : undefined,
            quantity: basketItem?.["quantity"],
          })),
          callbackUrl: payload?.["callbackUrl"],
          paymentSource: payload?.["paymentSource"],
          enabledInstallments: payload?.["enabledInstallments"],
        },
      }),
    /**
     * @dev EN:
     * @dev TR:
     * @param payload
     */
    createBasic: (
      payload?: BkmCreateBasicType) =>
      baseRequest(client, {
        endpoint: "/payment/bkm/initialize/basic",
        method: "POST",
        body: {
          locale: payload?.["locale"],
          conversationId: payload?.["conversationId"],
          connectorName: payload?.["connectorName"],
          price: payload?.["price"]
            ? formatPrice(payload?.["price"])
            : undefined,
          callbackUrl: payload?.["callbackUrl"],
          buyerEmail: payload?.["buyerEmail"],
          buyerId: payload?.["buyerId"],
          buyerIp: payload?.["buyerIp"],
          posOrderId: payload?.["posOrderId"],
          installmentDetails: payload?.["installmentDetails"]?.map((
            bkmInstallmentDetail
          ) => ({
            bankId: bkmInstallmentDetail?.["bankId"],
            installmentPrices: bkmInstallmentDetail?.["installmentPrices"]?.map((bkmInstallmentPrice) => ({
              installmentNumber: bkmInstallmentPrice?.["installmentNumber"],
              totalPrice: bkmInstallmentPrice?.["totalPrice"] ? formatPrice(bkmInstallmentPrice["totalPrice"]) : undefined
            }))
          })),
        },
      }),
    /**
     * @dev EN:
     * @dev TR:
     * @param payload
     */
    retrieve: (payload: BkmRetrieveType) =>
      baseRequest(client, {
        endpoint: "/payment/apm/retrieve",
        method: "POST",
        body: {
          locale: payload?.locale,
          conversationId: payload?.conversationId,
          token: payload.token,
        },
      }),
  };
}
