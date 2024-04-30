// Imports
// =================================
import { BasicPaymentType } from "@/types/models";
import { formatPrice } from "@/utils/utils";
import PaymentCard from "./PaymentCard";

// Model
// =================================
export default function (data?: BasicPaymentType) {
  if (!data) return undefined;
  return {
    locale: data?.['locale'],
    conversationId: data?.['conversationId'],
    price: data?.['price'] ? formatPrice(data['price']) : undefined,
    paidPrice: data?.['paidPrice'] ? formatPrice(data['paidPrice']) : undefined,
    installment: data?.['installment'],
    buyerEmail: data?.['buyerEmail'],
    buyerId: data?.['buyerId'],
    buyerIp: data?.['buyerIp'],
    posOrderId: data?.['posOrderId'],
    paymentCard: PaymentCard(data?.['paymentCard']),
    currency: data?.["currency"],
    connectorName: data?.['connectorName'],
    callbackUrl: data?.['callbackUrl']
  };
}
