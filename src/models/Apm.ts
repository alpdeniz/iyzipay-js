// Imports
// =================================
import { formatPrice } from "@/utils/utils";
import type { BasketItemType } from "@/types/models";
import Buyer from "./Buyer";
import Address from "./Address";
import BasketItem from "./BasketItem";

// Model
// =================================
export default function (data?: { [key: string]: any }) {
  if (!data) return undefined;
  return {
    locale: data?.["locale"],
    conversationId: data?.["conversationId"],
    price: formatPrice(data?.["price"]),
    paidPrice: formatPrice(data?.["paidPrice"]),
    paymentChannel: data?.["paymentChannel"],
    paymentGroup: data?.["paymentGroup"],
    paymentSource: data?.["paymentSource"],
    currency: data?.["currency"],
    merchantOrderId: data?.["merchantOrderId"],
    countryCode: data?.["countryCode"],
    accountHolderName: data?.["accountHolderName"],
    merchantCallbackUrl: data?.["merchantCallbackUrl"],
    merchantErrorUrl: data?.["merchantErrorUrl"],
    merchantNotificationUrl: data?.["merchantNotificationUrl"],
    apmType: data?.["apmType"],
    basketId: data?.["basketId"],
    buyer: Buyer(data?.["buyer"]),
    shippingAddress: Address(data?.["shippingAddress"]),
    billingAddress: Address(data?.["billingAddress"]),
    basketItems: data?.["basketItems"].map(function (basketItem?: BasketItemType) {
      return BasketItem(basketItem);
    }),
  };
}
