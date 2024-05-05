// Imports
// =================================
import type {
  CardStorageCreateType,
  CardStorageDeleteType,
  CardStorageRetrieveType,
} from "../types/models";
import baseRequest from "../utils/baseRequest";
import { baseClient } from "../client";

/**
 * @dev EN:
 * @dev TR:
 * @param client
 * @returns
 */
export default function (client: ReturnType<typeof baseClient>) {
  return {
    /**
     * @dev EN: Stores a card for retrieval later
     * @dev TR: Daha sonra alınmak üzere bir kart saklar 
     * @param payload 
     * @returns 
     */
    create: (payload: CardStorageCreateType) => 
      baseRequest(client, {
      endpoint: "/cardstorage/card",
      method: "POST",
      body: {
        locale: payload?.["locale"],
        conversationId: payload?.["conversationId"],
        cardUserKey: payload?.["cardUserKey"],
        externalId: payload?.["externalId"],
        email: payload?.["email"],
        card: {
          cardAlias: payload?.["card"]?.["cardAlias"],
          cardNumber: payload["card"]["cardNumber"],
          expireYear: payload["card"]["expireYear"],
          expireMonth: payload["card"]["expireMonth"],
          cardHolderName: payload["card"]["cardHolderName"],
        }
      },
    }),
    /**
     * @dev EN: Retrieves a pre-stored card
     * @dev TR: Önceden saklanmış bir kartı getirir
     * @param payload 
     * @returns 
     */
    retrieve: (payload: CardStorageRetrieveType) => baseRequest(client, {
      endpoint: "/cardstorage/cards",
      method: "POST",
      body: {
        locale: payload?.["locale"],
        conversationId: payload?.["conversationId"],
        cardUserKey: payload["cardUserKey"],
      },
    }),
    /**
     * @dev EN: Deletes a pre-stored card
     * @dev TR: Önceden saklanmış bir kartı siler
     * @param payload 
     * @returns 
     */
    delete: (payload: CardStorageDeleteType) => baseRequest(client, {
      endpoint: "/cardstorage/card",
      method: "DELETE",
      body: {
        locale: payload?.["locale"],
        conversationId: payload?.["conversationId"],
        cardUserKey: payload["cardUserKey"],
        cardToken: payload["cardToken"]
      },
    }),
  }
}