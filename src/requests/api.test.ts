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
test("Should initiate and return success`", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.apiTest.healthCheck();

  // Tests
  const keys = Object.keys(response);
  expect(keys.includes('status')).toBe(true);
  expect(keys.includes('locale')).toBe(true);
  expect(keys.includes('systemTime')).toBe(true);
  expect(response?.status).toBe('success');
  expect(response?.locale).toBe('tr');
  expect(typeof response?.systemTime).toBe('number');
});