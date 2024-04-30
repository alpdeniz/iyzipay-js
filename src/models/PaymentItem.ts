// Imports
// =================================
import { PaymentItemType } from "@/types/models";
import { formatPrice } from "@/utils/utils";

// Model
// =================================
export default function (data?: PaymentItemType) {
  if (!data) return undefined;
  return {
    subMerchantKey: data?.['subMerchantKey'],
    paymentTransactionId: data?.['paymentTransactionId'],
    subMerchantPrice: data?.['subMerchantPrice'] ? formatPrice(data['subMerchantPrice']) : undefined,
  };
}
