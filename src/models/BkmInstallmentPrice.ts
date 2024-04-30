// Imports
// =================================
import { BkmInstallmentPriceType } from "@/types/models";
import { formatPrice } from "@/utils/utils";

// Model
// =================================
export default function (data?: BkmInstallmentPriceType) {
  if (!data) return undefined;
  return {
    installmentNumber: data?.["installmentNumber"],
    totalPrice: data?.["totalPrice"] ? formatPrice(data["totalPrice"]) : undefined
  };
}
