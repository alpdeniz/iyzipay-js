// Imports
// =================================
import type {
  SubmerchantCreateType,
  SubmerchantRetrieveType,
  SubmerchantUpdateType,
} from "@/types/models";
import baseRequest from "@/utils/baseRequest";
import { baseClient } from "@/client";

/**
 * @dev EN:
 * @dev TR:
 * @param client
 * @returns
 */
export default function (client: ReturnType<typeof baseClient>) {
  return {
    /**
     * @dev EN: Create a submerchant
     * @dev TR: Alt bayi oluştur
     * @param payload 
     * @returns 
     */
    create: (payload: SubmerchantCreateType) => 
      baseRequest(client, {
      endpoint: "/onboarding/submerchant",
      method: "POST",
      body: {
        locale: payload?.["locale"],
        conversationId: payload?.["conversationId"],
        name: payload?.["name"],
        email: payload?.["email"],
        gsmNumber: payload?.["gsmNumber"],
        address: payload?.["address"],
        iban: payload?.["iban"],
        taxOffice: payload?.["taxOffice"],
        contactName: payload?.["contactName"],
        contactSurname: payload?.["contactSurname"],
        legalCompanyTitle: payload?.["legalCompanyTitle"],
        swiftCode: payload?.["swiftCode"],
        currency: payload?.["currency"],
        subMerchantExternalId: payload?.["subMerchantExternalId"],
        identityNumber: payload?.["identityNumber"],
        taxNumber: payload?.["taxNumber"],
        subMerchantType: payload?.["subMerchantType"],
      },
    }),
    /**
     * @dev EN: Retrieve a submerchant
     * @dev TR: Alt bayi detaylarını getir
     * @param payload 
     * @returns 
     */
    retrieve: (payload: SubmerchantRetrieveType) => baseRequest(client, {
      endpoint: "/onboarding/submerchant/detail",
      method: "POST",
      body: {
        locale: payload?.["locale"],
        conversationId: payload?.["conversationId"],
        subMerchantExternalId: payload?.["subMerchantExternalId"],
      },
    }),
    /**
     * @dev EN: Update a submerchant
     * @dev TR: Alt bayi güncelle
     * @param payload 
     * @returns 
     */
    update: (payload: SubmerchantUpdateType) => baseRequest(client, {
      endpoint: "/onboarding/submerchant",
      method: "PUT",
      body: {
        locale: payload?.["locale"],
        conversationId: payload?.["conversationId"],
        name: payload?.["name"],
        email: payload?.["email"],
        gsmNumber: payload?.["gsmNumber"],
        address: payload?.["address"],
        iban: payload?.["iban"],
        contactName: payload?.["contactName"],
        contactSurname: payload?.["contactSurname"],
        currency: payload?.["currency"],
        subMerchantKey: payload?.["subMerchantKey"],
        identityNumber: payload?.["identityNumber"],
        taxOffice: payload?.["taxOffice"],
        legalCompanyTitle: payload?.["legalCompanyTitle"],
        swiftCode: payload?.["swiftCode"],
        taxNumber: payload?.["taxNumber"],
      },
    }),
  }
}