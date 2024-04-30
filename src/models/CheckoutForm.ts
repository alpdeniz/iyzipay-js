// Imports
// =================================
import { BasketItemType, CheckoutFormCreateType } from "@/types/models";
import { formatPrice } from "@/utils/utils";
import Buyer from "./Buyer";
import Address from "./Address";
import BasketItem from "./BasketItem";

// Model
// =================================
export default function (data?: CheckoutFormCreateType) {
  if (!data) return undefined;
  return {
    locale: data?.['locale'],
    conversationId: data?.['conversationId'],
    price: data?.['price'] ? formatPrice(data['price']) : undefined,
    basketId: data?.['basketId'],
    paymentGroup: data?.['paymentGroup'],
    buyer: Buyer(data?.["buyer"]),
    shippingAddress: Address(data?.["shippingAddress"]),
    billingAddress: Address(data?.["billingAddress"]),
    basketItems: data?.["basketItems"]?.map(function (basketItem?: BasketItemType) {
        return BasketItem(basketItem);
    }),
    callbackUrl: data?.["callbackUrl"],
    paymentSource: data?.["paymentSource"],
    currency: data?.["currency"],
    posOrderId: data?.["posOrderId"],
    paidPrice: data?.["paidPrice"] ? formatPrice(data["paidPrice"]) : undefined,
    forceThreeDS: data?.["forceThreeDS"],
    cardUserKey: data?.["cardUserKey"],
    enabledInstallments: data?.["enabledInstallments"]
  };
}
