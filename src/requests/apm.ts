import Apm from "@/models/Apm";
import { ApmType } from "@/types/models";
import { locale } from "@/utils/constants";
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
     * @dev EN: Create a new checkout form
     * @dev TR: Yeni bir ödeme formu oluştur
     * @param payload
     */
    create: (payload?: ApmType) =>
      baseRequest(client, {
        endpoint: "/payment/apm/initialize",
        method: "POST",
        body: Apm(payload),
      }),
    /**
     * @dev EN: Retrieve a checkout form
     * @dev TR: Bir ödeme formunu getir
     * @param payload
     */
    retrieve: (payload?: { 
      locale?: typeof locale[keyof typeof locale],
      conversationId?: string,
      paymentId?: string 
    }) => baseRequest(client, {
      endpoint: "/payment/apm/retrieve",
      method: "POST",
      body: {
        locale: payload?.locale,
        conversationId: payload?.conversationId,
        paymentId: payload?.paymentId,
      },
    }),
  };
}
