// Imports
// =================================
import { BkmInstallmentType, BkmInstallmentPriceType } from "@/types/models";
import BkmInstallmentPrice from "./BkmInstallmentPrice";

// Model
// =================================
export default function (data?: BkmInstallmentType) {
  if (!data) return undefined;
  return {
    bankId: data?.["bankId"],
    installmentPrices: data?.["installmentPrices"]?.map(function (bkmInstallmentPrice?: BkmInstallmentPriceType) {
        return BkmInstallmentPrice(bkmInstallmentPrice);
    })
  };
}
