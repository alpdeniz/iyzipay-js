// Imports
// =================================
import { expect, test } from "vitest";
import iyzico from "..";
import { config } from "dotenv";
import { SUBMERCHANTS } from "../../test/helpers";
import { SubmerchantCreateType, SubmerchantRetrieveType } from "../types/models";

// Config
// =================================
config();

let SUBMERCHANT_ID_PERSONAL = "";
let SUBMERCHANT_KEY_PERSONAL = "";

let SUBMERCHANT_ID_PRIVATE_COMPANY = "";
let SUBMERCHANT_KEY_PRIVATE_COMPANY = "";

let SUBMERCHANT_ID_LIMITED_OR_JOINT_STOCK_COMPANY = "";
let SUBMERCHANT_KEY_LIMITED_OR_JOINT_STOCK_COMPANY = "";

// Test
// =================================
/**
 * @dev EN: Tests creating a `PERSONAL` submerchant
 * @dev TR: `PERSONAL` tipinde bir altbayi oluşturmayı test eder
 */
test("Submerchant - create `PERSONAL`", async () => {
  // Setup
  SUBMERCHANT_ID_PERSONAL = `${Math.random().toString(36).slice(2)}`;
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.submerchant.create({
    ...SUBMERCHANTS.PERSONAL,
    subMerchantExternalId: SUBMERCHANT_ID_PERSONAL,
  } as SubmerchantCreateType);

  // Tests
  expect(response).toBeDefined();
  const keys = Object.keys(response);
  expect(keys.includes('status')).toBe(true);
  expect(keys.includes('locale')).toBe(true);
  expect(keys.includes('systemTime')).toBe(true);
  expect(keys.includes('conversationId')).toBe(true);
  expect(keys.includes('subMerchantKey')).toBe(true);
  expect(response?.status).toBe('success');
  expect(response?.locale).toBe(SUBMERCHANTS.PERSONAL.locale);
  expect(typeof response?.systemTime).toBe('number');
  expect(response?.conversationId).toBe(SUBMERCHANTS.PERSONAL.conversationId);
  expect(typeof response?.subMerchantKey).toBe('string');
  SUBMERCHANT_KEY_PERSONAL = response?.subMerchantKey;
});

/**
 * @dev EN: Tests retrieving a `PERSONAL` submerchant
 * @dev TR: `PERSONAL` tipinde bir altbayi oluşturmayı test eder
 */
test("Submerchant - retrieve `PERSONAL`", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.submerchant.retrieve({
    locale: SUBMERCHANTS.PERSONAL.locale,
    conversationId: SUBMERCHANTS.PERSONAL.conversationId,
    subMerchantExternalId: SUBMERCHANT_ID_PERSONAL
  } as SubmerchantRetrieveType);

  // Tests
  expect(response).toBeDefined();
  const keys = Object.keys(response);
  expect(keys.includes('status')).toBe(true);
  expect(keys.includes('locale')).toBe(true);
  expect(keys.includes('systemTime')).toBe(true);
  expect(keys.includes('conversationId')).toBe(true);
  expect(keys.includes('name')).toBe(true);
  expect(keys.includes('email')).toBe(true);
  expect(keys.includes('gsmNumber')).toBe(true);
  expect(keys.includes('address')).toBe(true);
  expect(keys.includes('iban')).toBe(true);
  expect(keys.includes('bankCountry')).toBe(true);
  expect(keys.includes('currency')).toBe(true);
  expect(keys.includes('contactName')).toBe(true);
  expect(keys.includes('contactSurname')).toBe(true);
  expect(keys.includes('subMerchantExternalId')).toBe(true);
  expect(keys.includes('identityNumber')).toBe(true);
  expect(keys.includes('subMerchantType')).toBe(true);
  expect(keys.includes('subMerchantKey')).toBe(true);

  expect(typeof response?.systemTime).toBe('number');
  expect(response?.status).toBe('success');
  expect(response?.locale).toBe(SUBMERCHANTS.PERSONAL.locale);
  expect(response?.conversationId).toBe(SUBMERCHANTS.PERSONAL.conversationId);
  expect(response?.name).toBe(SUBMERCHANTS.PERSONAL.name);
  expect(response?.email).toBe(SUBMERCHANTS.PERSONAL.email);
  expect(response?.gsmNumber).toBe(SUBMERCHANTS.PERSONAL.gsmNumber);
  expect(response?.address).toBe(SUBMERCHANTS.PERSONAL.address);
  expect(response?.iban).toBe(SUBMERCHANTS.PERSONAL.iban);
  expect(response?.bankCountry).toBe('TR');
  expect(response?.currency).toBe(SUBMERCHANTS.PERSONAL.currency);
  expect(response?.contactName).toBe(SUBMERCHANTS.PERSONAL.contactName);
  expect(response?.contactSurname).toBe(SUBMERCHANTS.PERSONAL.contactSurname);
  expect(response?.subMerchantExternalId).toBe(SUBMERCHANT_ID_PERSONAL);
  expect(response?.identityNumber).toBe(SUBMERCHANTS.PERSONAL.identityNumber);
  expect(response?.subMerchantType).toBe(SUBMERCHANTS.PERSONAL.subMerchantType);
  expect(response?.subMerchantKey).toBe(SUBMERCHANT_KEY_PERSONAL);
});

/**
 * @dev EN: Tests creating a `PRIVATE_COMPANY` submerchant
 * @dev TR: `PRIVATE_COMPANY` tipinde bir altbayi oluşturmayı test eder
 */
test("Submerchant - create `PRIVATE_COMPANY`", async () => {
  // Setup
  SUBMERCHANT_ID_PRIVATE_COMPANY = `${Math.random().toString(36).slice(2)}`;
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.submerchant.create({
    ...SUBMERCHANTS.PRIVATE_COMPANY,
    subMerchantExternalId: SUBMERCHANT_ID_PRIVATE_COMPANY,
  } as SubmerchantCreateType);

  // Tests
  expect(response).toBeDefined();
  const keys = Object.keys(response);
  expect(keys.includes('status')).toBe(true);
  expect(keys.includes('locale')).toBe(true);
  expect(keys.includes('systemTime')).toBe(true);
  expect(keys.includes('conversationId')).toBe(true);
  expect(keys.includes('subMerchantKey')).toBe(true);
  expect(response?.status).toBe('success');
  expect(response?.locale).toBe(SUBMERCHANTS.PRIVATE_COMPANY.locale);
  expect(typeof response?.systemTime).toBe('number');
  expect(response?.conversationId).toBe(SUBMERCHANTS.PRIVATE_COMPANY.conversationId);
  expect(typeof response?.subMerchantKey).toBe('string');
  SUBMERCHANT_KEY_PRIVATE_COMPANY= response?.subMerchantKey;
});

/**
 * @dev EN: Tests retrieving a `PRIVATE_COMPANY` submerchant
 * @dev TR: `PRIVATE_COMPANY` tipinde bir altbayi oluşturmayı test eder
 */
test("Submerchant - retrieve `PRIVATE_COMPANY`", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.submerchant.retrieve({
    locale: SUBMERCHANTS.PRIVATE_COMPANY.locale,
    conversationId: SUBMERCHANTS.PRIVATE_COMPANY.conversationId,
    subMerchantExternalId: SUBMERCHANT_ID_PRIVATE_COMPANY
  } as SubmerchantRetrieveType);

  // Tests
  expect(response).toBeDefined();
  const keys = Object.keys(response);
  expect(keys.includes('status')).toBe(true);
  expect(keys.includes('locale')).toBe(true);
  expect(keys.includes('systemTime')).toBe(true);
  expect(keys.includes('conversationId')).toBe(true);
  expect(keys.includes('name')).toBe(true);
  expect(keys.includes('email')).toBe(true);
  expect(keys.includes('gsmNumber')).toBe(true);
  expect(keys.includes('address')).toBe(true);
  expect(keys.includes('iban')).toBe(true);
  expect(keys.includes('bankCountry')).toBe(true);
  expect(keys.includes('currency')).toBe(true);
  expect(keys.includes('taxOffice')).toBe(true);
  expect(keys.includes('legalCompanyTitle')).toBe(true);
  expect(keys.includes('subMerchantExternalId')).toBe(true);
  expect(keys.includes('identityNumber')).toBe(true);
  expect(keys.includes('subMerchantType')).toBe(true);
  expect(keys.includes('subMerchantKey')).toBe(true);
  expect(typeof response?.systemTime).toBe('number');
  expect(response?.status).toBe('success');
  expect(response?.locale).toBe(SUBMERCHANTS.PRIVATE_COMPANY.locale);
  expect(response?.conversationId).toBe(SUBMERCHANTS.PRIVATE_COMPANY.conversationId);
  expect(response?.name).toBe(SUBMERCHANTS.PRIVATE_COMPANY.name);
  expect(response?.email).toBe(SUBMERCHANTS.PRIVATE_COMPANY.email);
  expect(response?.gsmNumber).toBe(SUBMERCHANTS.PRIVATE_COMPANY.gsmNumber);
  expect(response?.address).toBe(SUBMERCHANTS.PRIVATE_COMPANY.address);
  expect(response?.iban).toBe(SUBMERCHANTS.PRIVATE_COMPANY.iban);
  expect(response?.bankCountry).toBe('TR');
  expect(response?.currency).toBe(SUBMERCHANTS.PRIVATE_COMPANY.currency);
  expect(response?.taxOffice).toBe(SUBMERCHANTS.PRIVATE_COMPANY.taxOffice);
  expect(response?.legalCompanyTitle).toBe(SUBMERCHANTS.PRIVATE_COMPANY.legalCompanyTitle);
  expect(response?.subMerchantExternalId).toBe(SUBMERCHANT_ID_PRIVATE_COMPANY);
  expect(response?.identityNumber).toBe(SUBMERCHANTS.PRIVATE_COMPANY.identityNumber);
  expect(response?.subMerchantType).toBe(SUBMERCHANTS.PRIVATE_COMPANY.subMerchantType);
  expect(response?.subMerchantKey).toBe(SUBMERCHANT_KEY_PRIVATE_COMPANY);
});

/**
 * @dev EN: Tests creating a `LIMITED_OR_JOINT_STOCK_COMPANY` submerchant
 * @dev TR: `LIMITED_OR_JOINT_STOCK_COMPANY` tipinde bir altbayi oluşturmayı test eder
 */
test("Submerchant - create `LIMITED_OR_JOINT_STOCK_COMPANY`", async () => {
  // Setup
  SUBMERCHANT_ID_LIMITED_OR_JOINT_STOCK_COMPANY = `${Math.random().toString(36).slice(2)}`;
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.submerchant.create({
    ...SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY,
    subMerchantExternalId: SUBMERCHANT_ID_LIMITED_OR_JOINT_STOCK_COMPANY,
  } as SubmerchantCreateType);

  // Tests
  expect(response).toBeDefined();
  const keys = Object.keys(response);
  expect(keys.includes('status')).toBe(true);
  expect(keys.includes('locale')).toBe(true);
  expect(keys.includes('systemTime')).toBe(true);
  expect(keys.includes('conversationId')).toBe(true);
  expect(keys.includes('subMerchantKey')).toBe(true);
  expect(response?.status).toBe('success');
  expect(response?.locale).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.locale);
  expect(typeof response?.systemTime).toBe('number');
  expect(response?.conversationId).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.conversationId);
  expect(typeof response?.subMerchantKey).toBe('string');
  SUBMERCHANT_KEY_LIMITED_OR_JOINT_STOCK_COMPANY= response?.subMerchantKey;
});

/**
 * @dev EN: Tests retrieving a `LIMITED_OR_JOINT_STOCK_COMPANY` submerchant
 * @dev TR: `LIMITED_OR_JOINT_STOCK_COMPANY` tipinde bir altbayi oluşturmayı test eder
 */
test("Submerchant - retrieve `LIMITED_OR_JOINT_STOCK_COMPANY`", async () => {
  // Setup
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // Init
  const response = await client.submerchant.retrieve({
    locale: SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.locale,
    conversationId: SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.conversationId,
    subMerchantExternalId: SUBMERCHANT_ID_LIMITED_OR_JOINT_STOCK_COMPANY
  } as SubmerchantRetrieveType);

  // Tests
  expect(response).toBeDefined();
  const keys = Object.keys(response);
  expect(keys.includes('status')).toBe(true);
  expect(keys.includes('locale')).toBe(true);
  expect(keys.includes('systemTime')).toBe(true);
  expect(keys.includes('conversationId')).toBe(true);
  expect(keys.includes('name')).toBe(true);
  expect(keys.includes('email')).toBe(true);
  expect(keys.includes('gsmNumber')).toBe(true);
  expect(keys.includes('address')).toBe(true);
  expect(keys.includes('iban')).toBe(true);
  expect(keys.includes('bankCountry')).toBe(true);
  expect(keys.includes('currency')).toBe(true);
  expect(keys.includes('taxOffice')).toBe(true);
  expect(keys.includes('legalCompanyTitle')).toBe(true);
  expect(keys.includes('subMerchantExternalId')).toBe(true);
  expect(keys.includes('taxNumber')).toBe(true);
  expect(keys.includes('subMerchantType')).toBe(true);
  expect(keys.includes('subMerchantKey')).toBe(true);
  expect(typeof response?.systemTime).toBe('number');
  expect(response?.status).toBe('success');
  expect(response?.locale).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.locale);
  expect(response?.conversationId).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.conversationId);
  expect(response?.name).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.name);
  expect(response?.email).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.email);
  expect(response?.gsmNumber).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.gsmNumber);
  expect(response?.address).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.address);
  expect(response?.iban).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.iban);
  expect(response?.bankCountry).toBe('TR');
  expect(response?.currency).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.currency);
  expect(response?.taxOffice).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.taxOffice);
  expect(response?.legalCompanyTitle).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.legalCompanyTitle);
  expect(response?.subMerchantExternalId).toBe(SUBMERCHANT_ID_LIMITED_OR_JOINT_STOCK_COMPANY);
  expect(response?.taxNumber).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.taxNumber);
  expect(response?.subMerchantType).toBe(SUBMERCHANTS.LIMITED_OR_JOINT_STOCK_COMPANY.subMerchantType);
  expect(response?.subMerchantKey).toBe(SUBMERCHANT_KEY_LIMITED_OR_JOINT_STOCK_COMPANY);
});