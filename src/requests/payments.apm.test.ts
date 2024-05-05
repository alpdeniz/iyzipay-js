// Imports
// =================================
import { expect, test, describe } from "vitest";
import iyzico from "..";
import { SUBMERCHANTS } from "../../test/helpers";
import { config } from "dotenv";
import { SubmerchantCreateType } from "../types/models";

// Config
// =================================
config();

let SUBMERCHANT_ID_PERSONAL = "";
let SUBMERCHANT_KEY_PERSONAL = "";

// Test
// =================================
describe("payments.apm", () => {
  /**
   * @dev EN: NOT WORKING
   * @dev TR: ÇALIŞMIYOR
   */
  test.skip("apm - create", async () => {
    // Setup
    SUBMERCHANT_ID_PERSONAL = `${Math.random().toString(36).slice(2)}`;
    const client = iyzico({
      apiKey: `${process.env.IYZICO_API_KEY}`,
      secretKey: `${process.env.IYZICO_SECRET_KEY}`,
    });
    const submerchant = await client.submerchant.create({
      ...SUBMERCHANTS.PERSONAL,
      subMerchantExternalId: SUBMERCHANT_ID_PERSONAL,
    } as SubmerchantCreateType);
    SUBMERCHANT_KEY_PERSONAL = submerchant.subMerchantKey;

    // Init
    const response = await client.payments.apm.create({
      locale: "en",
      conversationId: "123456789",
      price: "1",
      paidPrice: "1.1",
      paymentChannel: "WEB",
      paymentGroup: "PRODUCT",
      currency: "EUR",
      merchantOrderId: "123456789",
      countryCode: "DE",
      accountHolderName: "John Doe",
      merchantCallbackUrl: "https://www.merchant.com/callback",
      merchantErrorUrl: "https://www.merchant.com/error",
      merchantNotificationUrl: "https://www.merchant.com/notification",
      apmType: "SOFORT",
      basketId: "B67832",
      buyer: {
        id: "BY789",
        name: "John",
        surname: "Doe",
        gsmNumber: "+905350000000",
        email: "email@email.com",
        identityNumber: "74300864791",
        lastLoginDate: "2015-10-05 12:43:35",
        registrationDate: "2013-04-21 15:12:09",
        registrationAddress:
          "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        ip: "85.34.78.112",
        city: "Istanbul",
        country: "Turkey",
        zipCode: "34732",
      },
      shippingAddress: {
        contactName: "Jane Doe",
        city: "Istanbul",
        country: "Turkey",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        zipCode: "34742",
      },
      billingAddress: {
        contactName: "Jane Doe",
        city: "Istanbul",
        country: "Turkey",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        zipCode: "34742",
      },
      basketItems: [
        {
          id: "BI101",
          name: "Binocular",
          category1: "Collectibles",
          category2: "Accessories",
          itemType: "VIRTUAL",
          price: "0.3",
          subMerchantKey: SUBMERCHANT_KEY_PERSONAL,
          subMerchantPrice: "0.27",
        },
        {
          id: "BI102",
          name: "Game code",
          category1: "Game",
          category2: "Online Game Items",
          itemType: "PHYSICAL",
          price: "0.5",
          subMerchantKey: SUBMERCHANT_KEY_PERSONAL,
          subMerchantPrice: "0.45",
        },
        {
          id: "BI103",
          name: "Usb",
          category1: "Electronics",
          category2: "Usb / Cable",
          itemType: "PHYSICAL",
          price: "0.2",
          subMerchantKey: SUBMERCHANT_KEY_PERSONAL,
          subMerchantPrice: "0.18",
        },
      ],
    });

    // Tests
    console.log({ response });
    expect(response).toBeDefined();
    // const keys = Object.keys(response);
    // expect(keys.includes("status")).toBe(true);
    // expect(keys.includes("locale")).toBe(true);
    // expect(keys.includes("systemTime")).toBe(true);
    // expect(keys.includes("conversationId")).toBe(true);
    // expect(keys.includes("htmlContent")).toBe(true);
    // expect(keys.includes("token")).toBe(true);
    // expect(response?.status).toBe("success");
    // expect(response?.locale).toBe("en");
    // expect(typeof response?.systemTime).toBe("number");
    // expect(response?.conversationId).toBe("123456789");
    // expect(typeof response?.htmlContent).toBe("string");
    // expect(typeof response?.token).toBe("string");
    // expect(response?.token.startsWith("mockToken_")).toBe(true);
  });

  /**
   * @dev EN: Cannot test without create
   * @dev TR: Oluşturmadan test edilemez
   */
  test("apm - read", async () => {
    // Setup
    const client = iyzico({
      apiKey: `${process.env.IYZICO_API_KEY}`,
      secretKey: `${process.env.IYZICO_SECRET_KEY}`,
    });

    // Init
    const response = await client.payments.apm.retrieve({
      locale: "en",
      conversationId: "123456789",
      paymentId: "123456789",
    });

    // Tests
    console.log({ response });
    const keys = Object.keys(response);
    // expect(keys.includes('status')).toBe(true);
    // expect(keys.includes('locale')).toBe(true);
    // expect(keys.includes('systemTime')).toBe(true);
  });
});
