// Imports
// =================================
import { BuyerType } from "@/types/models";

// Model
// =================================
export default function (data?: BuyerType) {
  if (!data) return undefined;
  return {
    id: data?.["id"],
    name: data?.["name"],
    surname: data?.["surname"],
    identityNumber: data?.["identityNumber"],
    email: data?.["email"],
    gsmNumber: data?.["gsmNumber"],
    registrationDate: data?.["registrationDate"],
    lastLoginDate: data?.["lastLoginDate"],
    registrationAddress: data?.["registrationAddress"],
    city: data?.["city"],
    country: data?.["country"],
    zipCode: data?.["zipCode"],
    ip: data?.["ip"]
  };
}
