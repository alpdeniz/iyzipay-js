// Imports
// =================================
import { expect, test } from "vitest";
import iyzico from "..";;
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
test("Submerchant - ", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.submerchant.create({
    locale: "en",
    conversationId: "123456789",
    name: "John's market",
    email: "email@submerchantemail.com",
    gsmNumber: "+905350000000",
    address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
    iban: "TR180006200119000006672315",
    contactName: "John",
    contactSurname: "Doe",
    currency: "TRY",
    subMerchantExternalId: "B49224",
    identityNumber: "1234567890",
    subMerchantType: "PERSONAL"
  });

  // Tests
  console.log({ response });
  expect(response).toBeDefined();
  // const keys = Object.keys(response);
  // expect(keys.includes('binNumber')).toBe(true);
  // expect(keys.includes('cardType')).toBe(true);
  // expect(keys.includes('cardAssociation')).toBe(true);
  // expect(keys.includes('cardFamily')).toBe(true);
  // expect(keys.includes('bankName')).toBe(true);
  // expect(keys.includes('bankCode')).toBe(true);
  // expect(keys.includes('commercial')).toBe(true);
  // expect(keys.includes('status')).toBe(true);
  // expect(keys.includes('locale')).toBe(true);
  // expect(keys.includes('systemTime')).toBe(true);
  // expect(response?.binNumber).toBe('454360');
  // expect(response?.cardType).toBe('CREDIT_CARD');
  // expect(response?.cardAssociation).toBe('VISA');
  // expect(response?.cardFamily).toBe('Maximum');
  // expect(response?.bankName).toBe('İş Bankası');
  // expect(response?.bankCode).toBe(64);
  // expect(response?.commercial).toBe(0);
  // expect(response?.status).toBe('success');
  // expect(response?.locale).toBe('tr');
  // expect(typeof response?.systemTime).toBe('number');
});