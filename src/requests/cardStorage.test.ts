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
 * @dev EN: 
 * @dev TR: 
 */
test("cardStorage - create", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.cardStorage.create({
    locale: "tr",
    conversationId: "123456789",
    externalId: "external id",
    email: "email@email.com",
    card: {
        cardAlias: "card alias",
        cardNumber: "5528790000000008",
        expireYear: "2030",
        expireMonth: "12",
        cardHolderName: "John Doe"
    }
  });

  // Tests
  expect(response).toBeDefined();
  // const keys = Object.keys(response);
  // expect(keys.includes('status')).toBe(true);
  // expect(keys.includes('locale')).toBe(true);
  // expect(keys.includes('systemTime')).toBe(true);
  // expect(response?.status).toBe('success');
  // expect(response?.locale).toBe('tr');
  // expect(typeof response?.systemTime).toBe('number');
});

/**
 * @dev EN: 
 * @dev TR: 
 */
test("cardStorage - retrieve", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.cardStorage.retrieve({
    locale: "tr",
    conversationId: "123456789",
    cardUserKey: "W2OM/ZUXAn0qCepxpa5Taz89lV0="
  });

  console.log({ response });

  // Tests
  expect(response).toBeDefined();
  // const keys = Object.keys(response);
  // expect(keys.includes('status')).toBe(true);
  // expect(keys.includes('locale')).toBe(true);
  // expect(keys.includes('systemTime')).toBe(true);
  // expect(response?.status).toBe('success');
  // expect(response?.locale).toBe('tr');
  // expect(typeof response?.systemTime).toBe('number');
});

/**
 * @dev EN: 
 * @dev TR: 
 */
test("cardStorage - delete", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.cardStorage.delete({
    locale: "tr",
    conversationId: "123456789",
    cardUserKey: "W2OM/ZUXAn0qCepxpa5Taz89lV0=",
    cardToken: "DAx+xnNEwm/4scO+ih7rOsM+4jo="
  });

  console.log({ response });

  // Tests
  expect(response).toBeDefined();
  // const keys = Object.keys(response);
  // expect(keys.includes('status')).toBe(true);
  // expect(keys.includes('locale')).toBe(true);
  // expect(keys.includes('systemTime')).toBe(true);
  // expect(response?.status).toBe('success');
  // expect(response?.locale).toBe('tr');
  // expect(typeof response?.systemTime).toBe('number');
});