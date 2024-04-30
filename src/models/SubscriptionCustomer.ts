// Imports
// =================================
import { SubscriptionCustomerType } from "@/types/models";
import SubscriptionAddress from "./SubscriptionAddress";

// Model
// =================================
export default function (data?: SubscriptionCustomerType) {
  if (!data) return undefined;
  return {
    name: data['name'],
    surname: data['surname'],
    identityNumber: data['identityNumber'],
    email: data['email'],
    gsmNumber: data['gsmNumber'],
    billingAddress: SubscriptionAddress(data?.['billingAddress']),
    shippingAddress: SubscriptionAddress(data?.['shippingAddress'])
  };
}
