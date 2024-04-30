import CheckoutForm from "@/models/CheckoutForm";
import { CheckoutFormCreateType } from "@/types/models";
import baseRequest from "@/utils/baseRequest";

/**
 * @dev EN: Main function handling checkout forms
 * @dev TR: Ödeme formu işlemlerini yöneten ana fonksiyon
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
    create: (payload?: CheckoutFormCreateType) =>
      baseRequest(client, {
        endpoint: "/payment/iyzipos/checkoutform/initialize/auth/ecom",
        method: "POST",
        body: CheckoutForm(payload),
      }),
    /**
     * @dev EN: Retrieve a checkout form
     * @dev TR: Bir ödeme formunu getir
     * @param payload 
     */
    retrieve: (payload: any) => {
      console.group("checkoutForm.retrieve");
      console.log({ payload });
      console.groupEnd();
    },
  };
}
