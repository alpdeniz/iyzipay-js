// Imports
// =================================
import { CardInformationType } from "@/types/models";

// Model
// =================================
export default function (data?: CardInformationType) {
  if (!data) return undefined;
  return {
    cardAlias: data?.["cardAlias"],
    cardNumber: data?.["cardNumber"],
    expireYear: data?.["expireYear"],
    expireMonth: data?.["expireMonth"],
    cardHolderName: data?.["cardHolderName"]
  };
}
