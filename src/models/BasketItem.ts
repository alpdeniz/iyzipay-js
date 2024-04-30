// Imports
// =================================
import { formatPrice } from "@/utils/utils";
import { BasketItemType } from "@/types/models";

// Model
// =================================
export default function (data?: BasketItemType) {
  if (!data) return undefined;
  return {
    id: data?.["id"],
    price: data?.["price"] ? formatPrice(data["price"]) : undefined,
    name: data?.["name"],
    category1: data?.["category1"],
    category2: data?.["category2"],
    itemType: data?.["itemType"],
    subMerchantKey: data?.["subMerchantKey"],
    subMerchantPrice: data?.["subMerchantPrice"]
      ? formatPrice(data["subMerchantPrice"])
      : undefined,
  };
}
