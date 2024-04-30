// Imports
// =================================
import { PaginationType } from "@/types/models";

// Model
// =================================
export default function (data?: PaginationType) {
  if (!data) return undefined;
  return {
    locale: data?.['locale'],
    conversationId: data?.['conversationId'],
    page: data?.['page'],
    count: data?.['count']
  };
}
