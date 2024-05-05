// Imports
// =================================
import { expect, test, describe } from "vitest";
import iyzico from "..";
import { config } from "dotenv";

// Config
// =================================
config();

// Test
// =================================
describe("payments.iyzipos", () => {
  /**
   *
   */
  test.skip("iyzipos - retrieve installment info", async () => {
    // Setup
    const client = iyzico({
      apiKey: `${process.env.IYZICO_API_KEY}`,
      secretKey: `${process.env.IYZICO_SECRET_KEY}`,
    });

    // Init
    const response = await client.payments.iyzipos.retrieveInstallmentInfo({
      locale: "en",
      conversationId: "123456789",
      price: "1.0",
      binNumber: "454360",
      currency: "TRY",
    });

    // Tests
    expect(response).toBeDefined();
    const keys = Object.keys(response);
    const keysInstallmentDetails = Object.keys(response.installmentDetails[0]);
    const keysInstallmentPrices = Object.keys(
      response.installmentDetails[0].installmentPrices[0]
    );
    expect(keys.includes("status")).toBe(true);
    expect(keys.includes("locale")).toBe(true);
    expect(keys.includes("systemTime")).toBe(true);
    expect(keys.includes("conversationId")).toBe(true);
    expect(keys.includes("installmentDetails")).toBe(true);
    expect(keysInstallmentDetails.includes("binNumber")).toBe(true);
    expect(keysInstallmentDetails.includes("price")).toBe(true);
    expect(keysInstallmentDetails.includes("cardType")).toBe(true);
    expect(keysInstallmentDetails.includes("cardAssociation")).toBe(true);
    expect(keysInstallmentDetails.includes("cardFamilyName")).toBe(true);
    expect(keysInstallmentDetails.includes("force3ds")).toBe(true);
    expect(keysInstallmentDetails.includes("bankCode")).toBe(true);
    expect(keysInstallmentDetails.includes("bankName")).toBe(true);
    expect(keysInstallmentDetails.includes("forceCvc")).toBe(true);
    expect(keysInstallmentDetails.includes("commercial")).toBe(true);
    expect(keysInstallmentDetails.includes("dccEnabled")).toBe(true);
    expect(keysInstallmentDetails.includes("agricultureEnabled")).toBe(true);
    expect(keysInstallmentDetails.includes("installmentPrices")).toBe(true);
    expect(keysInstallmentPrices.includes("installmentPrice")).toBe(true);
    expect(keysInstallmentPrices.includes("totalPrice")).toBe(true);
    expect(keysInstallmentPrices.includes("installmentNumber")).toBe(true);
    expect(response?.status).toBe("success");
    expect(response?.locale).toBe("en");
    expect(typeof response?.systemTime).toBe("number");
    expect(response?.conversationId).toBe("123456789");
    expect(
      Array.isArray(response?.installmentDetails) &&
        response?.installmentDetails.length > 0
    ).toBe(true);
    expect(response?.installmentDetails?.[0]?.binNumber).toBe("454360");
    expect(response?.installmentDetails?.[0]?.price).toBe(1);
    expect(response?.installmentDetails?.[0]?.cardType).toBe("CREDIT_CARD");
    expect(response?.installmentDetails?.[0]?.cardAssociation).toBe("VISA");
    expect(response?.installmentDetails?.[0]?.cardFamilyName).toBe("Maximum");
    expect(response?.installmentDetails?.[0]?.force3ds).toBe(0);
    expect(response?.installmentDetails?.[0]?.bankCode).toBe(64);
    expect(response?.installmentDetails?.[0]?.bankName).toBe("İş Bankası");
    expect(response?.installmentDetails?.[0]?.forceCvc).toBe(0);
    expect(response?.installmentDetails?.[0]?.commercial).toBe(0);
    expect(response?.installmentDetails?.[0]?.dccEnabled).toBe(0);
    expect(response?.installmentDetails?.[0]?.agricultureEnabled).toBe(0);
    expect(
      Array.isArray(response?.installmentDetails?.[0]?.installmentPrices) &&
        response?.installmentDetails?.[0]?.installmentPrices.length > 0
    ).toBe(true);
    expect(
      response?.installmentDetails?.[0]?.installmentPrices?.[0]
        ?.installmentPrice
    ).toBe(1);
    expect(
      response?.installmentDetails?.[0]?.installmentPrices?.[0]?.totalPrice
    ).toBe(1);
    expect(
      response?.installmentDetails?.[0]?.installmentPrices?.[0]
        ?.installmentNumber
    ).toBe(1);
  });

  /**
   * @dev EN: NEED MORE INFORMATION - Create approval
   * @dev TR: DAHA FAZLA BİLGİ GEREKİYOR - Onay oluştur
   */
  test.skip("iyzipos - create approval", async () => {
    // Setup
    const client = iyzico({
      apiKey: `${process.env.IYZICO_API_KEY}`,
      secretKey: `${process.env.IYZICO_SECRET_KEY}`,
    });

    // Init
    const response = await client.payments.iyzipos.createApproval({
      locale: "en",
      conversationId: "123456789",
      paymentTransactionId: "1",
    });

    console.log({ response });

    // Tests
    expect(response).toBeDefined();
  });

  /**
   * @dev EN: NEED MORE INFORMATION - Create disapproval
   * @dev TR: DAHA FAZLA BİLGİ GEREKİYOR - Red oluştur
   */
  test.skip("iyzipos - create disapproval", async () => {
    // Setup
    const client = iyzico({
      apiKey: `${process.env.IYZICO_API_KEY}`,
      secretKey: `${process.env.IYZICO_SECRET_KEY}`,
    });

    // Init
    const response = await client.payments.iyzipos.createApproval({
      locale: "en",
      conversationId: "123456789",
      paymentTransactionId: "1",
    });

    console.log({ response });

    // Tests
    expect(response).toBeDefined();
  });
});
