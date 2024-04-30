// Imports
// =================================
import { PaymentCardType } from "@/types/models";

// Model
// =================================
export default function (data?: PaymentCardType) {
  if (!data) return undefined;
  return {
    cardHolderName: data?.["cardHolderName"],
    cardNumber: data?.["cardNumber"],
    expireYear: data?.["expireYear"],
    expireMonth: data?.["expireMonth"],
    cvc: data?.["cvc"],
    registerCard: data?.["registerCard"],
    cardAlias: data?.["cardAlias"],
    cardToken: data?.["cardToken"],
    cardUserKey: data?.["cardUserKey"],
    consumerToken: data?.["consumerToken"],
    registerConsumerCard: data?.["registerConsumerCard"],
    ucsToken: data?.["ucsToken"]
  };
}
