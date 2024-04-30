// Imports
// =================================
import { SubscriptionAddressType } from "@/types/models";

// Model
// =================================
export default function (data?: SubscriptionAddressType) {
  if (!data) return undefined;
  return {
    address: data["address"],
    zipCode: data["zipCode"],
    contactName: data["contactName"],
    city: data["city"],
    country: data["country"],
    district: data["district"],
  };
}
