// Imports
// =================================
import { expect, test } from "vitest";
import iyzico from "..";
import { config } from "dotenv";

// Config
// =================================
config();

// Test
// =================================
/**
 * @dev EN: Health check
 * @dev TR: Sağlık kontrolü
 */
test.skip("binCheck`", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.payments.binCheck({
    binNumber: "454360",
  });

  // Tests
  expect(response).toBeDefined();
  const keys = Object.keys(response);
  expect(keys.includes("binNumber")).toBe(true);
  expect(keys.includes("cardType")).toBe(true);
  expect(keys.includes("cardAssociation")).toBe(true);
  expect(keys.includes("cardFamily")).toBe(true);
  expect(keys.includes("bankName")).toBe(true);
  expect(keys.includes("bankCode")).toBe(true);
  expect(keys.includes("commercial")).toBe(true);
  expect(keys.includes("status")).toBe(true);
  expect(keys.includes("locale")).toBe(true);
  expect(keys.includes("systemTime")).toBe(true);
  expect(response?.binNumber).toBe("454360");
  expect(response?.cardType).toBe("CREDIT_CARD");
  expect(response?.cardAssociation).toBe("VISA");
  expect(response?.cardFamily).toBe("Maximum");
  expect(response?.bankName).toBe("İş Bankası");
  expect(response?.bankCode).toBe(64);
  expect(response?.commercial).toBe(0);
  expect(response?.status).toBe("success");
  expect(response?.locale).toBe("tr");
  expect(typeof response?.systemTime).toBe("number");
});

/**
 *
 */
test("3dsecure - create", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.payments.threeDSecure.create({
    locale: "tr",
    conversationId: "123456789",
    price: "1.0",
    paidPrice: "1.2",
    installment: 1,
    paymentChannel: "WEB",
    basketId: "B67832",
    paymentGroup: "PRODUCT",
    paymentCard: {
      cardHolderName: "John Doe",
      cardNumber: "5528790000000008",
      expireYear: "2030",
      expireMonth: "12",
      cvc: "123",
    },
    buyer: {
      id: "BY789",
      name: "John",
      surname: "Doe",
      identityNumber: "74300864791",
      email: "email@email.com",
      gsmNumber: "+905350000000",
      registrationDate: "2013-04-21 15:12:09",
      lastLoginDate: "2015-10-05 12:43:35",
      registrationAddress: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      city: "Istanbul",
      country: "Turkey",
      zipCode: "34732",
      ip: "85.34.78.112",
    },
    shippingAddress: {
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
    },
    billingAddress: {
      address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
      zipCode: "34742",
      contactName: "Jane Doe",
      city: "Istanbul",
      country: "Turkey",
    },
    basketItems: [
      {
        id: "BI101",
        price: "0.3",
        name: "Binocular",
        category1: "Collectibles",
        category2: "Accessories",
        itemType: "PHYSICAL",
      },
      {
        id: "BI102",
        price: "0.5",
        name: "Game code",
        category1: "Game",
        category2: "Online Game Items",
        itemType: "VIRTUAL",
      },
      {
        id: "BI103",
        price: "0.2",
        name: "Usb",
        category1: "Electronics",
        category2: "Usb / Cable",
        itemType: "PHYSICAL",
      },
    ],
    currency: "TRY",
    callbackUrl: "https://www.merchant.com/callback",
  });

  console.log(response);

  // Tests
  expect(response).toBeDefined();
  const keys = Object.keys(response);
  expect(keys.includes("status")).toBe(true);
  expect(keys.includes("locale")).toBe(true);
  expect(keys.includes("systemTime")).toBe(true);
  expect(keys.includes("conversationId")).toBe(true);
  expect(keys.includes("threeDSHtmlContent")).toBe(true);
  expect(response?.status).toBe("success");
  expect(response?.locale).toBe("tr");
  expect(typeof response?.systemTime).toBe("number");
  expect(response?.conversationId).toBe("123456789");
  expect(typeof response?.threeDSHtmlContent).toBe("string");
});
