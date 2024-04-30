// Imports
// =================================
import { SubscriptionProductType } from "@/types/models";

// Model
// =================================
export default function (data?: SubscriptionProductType) {
  if (!data) return undefined;
  return {
    locale: data?.['locale'],
    conversationId: data?.['conversationId'],
    name: data?.["name"],
    description: data?.["description"]
  };
}
