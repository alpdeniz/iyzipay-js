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

let BKM_TOKEN = "";
let BKM_BASE64_HTMLCONTENT = "";

// Test
// =================================
describe("payments.bkm", () => {
  // /**
  //  *
  //  */
  // test("bkm - create basic", async () => {
  //   // Setup
  //   const client = iyzico({
  //     apiKey: `${process.env.IYZICO_API_KEY}`,
  //     secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  //   });

  //   // Init
  //   const response = await client.payments.bkm.createBasic({
  //     locale: "en",
  //     conversationId: "123456789",
  //     connectorName: "connector name",
  //     price: "1.0",
  //     callbackUrl: "https://www.merchant.com/callback",
  //     paymentGroup: "PRODUCT",
  //     buyerEmail: "email@email.com",
  //     buyerId: "BY789",
  //     buyerIp: "85.34.78.112",
  //     posOrderId: "123456789",
  //     installmentsDetails: [
  //       {
  //         bankId: "46",
  //         installmentPrices: [
  //           {
  //             installmentNumber: "1",
  //             totalPrice: "0.7",
  //           },
  //           {
  //             installmentNumber: "2",
  //             totalPrice: "0.3",
  //           },
  //         ],
  //       },
  //     ],
  //   });

  //   // Tests
  //   console.log({ response });
  // });

  /**
   *
   */
  test("bkm - create", async () => {
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
    const response = await client.payments.bkm.create({
      locale: "en",
      conversationId: "123456789",
      price: "1",
      basketId: "B67832",
      paymentGroup: "PRODUCT",
      callbackUrl: "https://www.merchant.com/callback",
      enabledInstallments: [2, 3, 6, 9],
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
    BKM_TOKEN = response?.token;
    BKM_BASE64_HTMLCONTENT = response?.htmlContent;
    console.log("=====================================");
    console.log("\n\nYour BKM_TOKEN:", BKM_TOKEN);
    console.log(
      `\n\nPlease paste the following URL to test the BKM payment:\ndata:text/html;base64,${BKM_BASE64_HTMLCONTENT}`
    );
    console.log("=====================================");
    expect(response).toBeDefined();
    const keys = Object.keys(response);
    expect(keys.includes("status")).toBe(true);
    expect(keys.includes("locale")).toBe(true);
    expect(keys.includes("systemTime")).toBe(true);
    expect(keys.includes("conversationId")).toBe(true);
    expect(keys.includes("htmlContent")).toBe(true);
    expect(keys.includes("token")).toBe(true);
    expect(response?.status).toBe("success");
    expect(response?.locale).toBe("en");
    expect(typeof response?.systemTime).toBe("number");
    expect(response?.conversationId).toBe("123456789");
    expect(typeof response?.htmlContent).toBe("string");
    expect(typeof response?.token).toBe("string");
    expect(response?.token.startsWith("mockToken_")).toBe(true);
  });

  /**
   * @dev EN: Cannot be tested until the token has been specified
   */
  test.skip("bkm - read", async () => {
    const MOCK_TOKEN = "<YOUR_BKM_TOKEN>"; // eg: mockToken_1714927045547

    // Setup
    const client = iyzico({
      apiKey: `${process.env.IYZICO_API_KEY}`,
      secretKey: `${process.env.IYZICO_SECRET_KEY}`,
    });

    // Init
    const response = await client.payments.bkm.retrieve({
      locale: "en",
      conversationId: "123456789",
      token: `${MOCK_TOKEN}`,
    });

    // Tests
    console.log({ response });
    const keys = Object.keys(response);
    // expect(keys.includes('status')).toBe(true);
    // expect(keys.includes('locale')).toBe(true);
    // expect(keys.includes('systemTime')).toBe(true);
  });
});
