// Imports
// =================================
import { PaymentCardType } from "@/types/models";

// Model
// =================================
export default function (data?: PaymentCardType) {
  if (!data) return undefined;
  return {
    cardHolderName: data?.['cardHolderName'],
    cardNumber: data?.['cardNumber'],
    expireYear: data?.['expireYear'],
    expireMonth: data?.['expireMonth'],
    cvc: data?.['cvc'],
    cardUserKey: data?.['cardUserKey'],
    cardToken: data?.['cardToken'],
    ucsToken: data?.['ucsToken'],
    consumerToken: data?.['consumerToken'],
    registerConsumerCard: data?.['registerConsumerCard'],
  };
}
