// Imports
// =================================
import { baseClient } from "../client";
import type { ApprovalCreateRevokeType } from "../types/models";
import baseRequest from "../utils/baseRequest";

/**
 * @dev EN:
 * @dev TR: 
 * @param client 
 * @returns 
 */
export default function (client: ReturnType<typeof baseClient>) {
  return {
    /**
     * @dev EN:
     * @dev TR: 
     * @param payload 
     */
    create: (payload?: ApprovalCreateRevokeType) =>
      baseRequest(client, {
        endpoint: "/payment/iyzipos/item/approve",
        method: "POST",
        body: {
          locale: payload?.locale,
          conversationId: payload?.conversationId,
          paymentTransactionId: payload?.paymentTransactionId
        },
      }),
    /**
     * @dev EN:
     * @dev TR: 
     * @param payload 
     */
    revoke: (payload: ApprovalCreateRevokeType) => baseRequest(client, {
      endpoint: "/payment/iyzipos/item/disapprove",
      method: "POST",
      body: {
        locale: payload?.locale,
        conversationId: payload?.conversationId,
        paymentTransactionId: payload?.paymentTransactionId
      },
    }),
  };
}
