import baseRequest from "@/utils/baseRequest";

/**
 * @dev EN:
 * @dev TR:
 * @param client
 * @returns
 */
export default function (client: any) {
  return {
    /**
     * @dev EN: Health check
     * @dev TR: Sağlık kontrolü
     * @param payload
     */
    retrieve: () =>
      baseRequest(client, {
        endpoint: "/payment/test",
        method: "GET",
      })
  };
}
