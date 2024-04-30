// Imports
// =================================
import { BasketItemType, PaymentType } from "@/types/models";
import { formatPrice } from "@/utils/utils";
import BasketItem from "./BasketItem";
import PaymentCard from "./PaymentCard";
import Buyer from "./Buyer";
import Address from "./Address";

// Model
// =================================
export default function (data?: PaymentType) {
  if (!data) return undefined;
  return {
    locale: data?.["locale"],
    conversationId: data?.["conversationId"],
    price: data?.["price"] ? formatPrice(data["price"]) : undefined,
    paidPrice: data?.["paidPrice"] ? formatPrice(data["paidPrice"]) : undefined,
    installment: data?.["installment"],
    paymentChannel: data?.["paymentChannel"],
    basketId: data?.["basketId"],
    paymentGroup: data?.["paymentGroup"],
    paymentCard: PaymentCard(data?.["paymentCard"]),
    buyer: Buyer(data?.["buyer"]),
    shippingAddress: Address(data?.["shippingAddress"]),
    billingAddress: Address(data?.["billingAddress"]),
    basketItems: data?.["basketItems"]?.map(function (
      basketItem?: BasketItemType
    ) {
      return BasketItem(basketItem);
    }),
    paymentSource: data?.["paymentSource"],
    currency: data?.["currency"],
    gsmNumber: data?.["gsmNumber"],
    posOrderId: data?.["posOrderId"],
    connectorName: data?.["connectorName"],
    callbackUrl: data?.["callbackUrl"],
  };
}
