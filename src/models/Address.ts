// Imports
// =================================
import { AddressType } from "@/types/models";

// Model
// =================================
export default function (data?: AddressType) {
  if (!data) return undefined;
  return {
    address: data?.["address"],
    zipCode: data?.["zipCode"],
    contactName: data?.["contactName"],
    city: data?.["city"],
    country: data?.["country"]
  };
}
