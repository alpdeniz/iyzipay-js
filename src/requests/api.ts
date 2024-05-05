// Imports
// =================================
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
     * @dev EN: Health check
     * @dev TR: Sağlık kontrolü
     * @param payload
     */
    healthCheck: () =>
      baseRequest(client, {
        endpoint: "/payment/test",
        method: "GET",
      })
  };
}
