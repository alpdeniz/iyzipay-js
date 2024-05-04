export const apiUrl = {
  SANDBOX: "https://sandbox-api.iyzipay.com",
  PRODUCTION: "https://api.iyzipay.com"
} as const;

export const installments = [1, 2, 3, 6, 9, 12] as const;

export const apmType = {
  SOFORT: 'SOFORT',
  IDEAL: 'IDEAL',
  QIWI: 'QIWI',
  GIROPAY: 'GIROPAY'
} as const;

export const baseItemType = {
  PHYSICAL: 'PHYSICAL',
  VIRTUAL: 'VIRTUAL'
} as const;

export const currency = {
  TRY: 'TRY',
  EUR: 'EUR',
  USD: 'USD',
  IRR: 'IRR',
  GBP: 'GBP',
  NOK: 'NOK',
  RUB: 'RUB',
  CHF: 'CHF'
} as const;

export const headerAttributes = {
  DEFAULT_RANDOM_STRING_SIZE: 8,
  DEFAULT_CLIENT_VERSION: 'iyzipay-node-2.0.61',
  DEFAULT_SEPARATOR: ':',
  HEADER_NAME_RANDOM_STRING: 'x-iyzi-rnd',
  HEADER_NAME_CLIENT_VERSION: 'x-iyzi-client-version',
  HEADER_NAME_AUTHORIZATION: 'Authorization',
  HEADER_VALUE_AUTHORIZATION_PREFIX: 'IYZWS',
  HEADER_VALUE_AUTHORIZATION_PREFIX_V2: 'IYZWSv2',
} as const;

export const locale = {
  TR: 'tr',
  EN: 'en'
} as const;

export const paymentChannel = {
  MOBILE: 'MOBILE',
  WEB: 'WEB',
  MOBILE_WEB: 'MOBILE_WEB',
  MOBILE_IOS: 'MOBILE_IOS',
  MOBILE_ANDROID: 'MOBILE_ANDROID',
  MOBILE_WINDOWS: 'MOBILE_WINDOWS',
  MOBILE_TABLET: 'MOBILE_TABLET',
  MOBILE_PHONE: 'MOBILE_PHONE'
} as const;

export const paymentGroup = {
  PRODUCT: 'PRODUCT',
  LISTING: 'LISTING',
  SUBSCRIPTION: 'SUBSCRIPTION'
} as const;

export const paymentPlan = {
  RECURRING: "RECURRING"
} as const;

export const refundReason = {
  DOUBLE_PAYMENT : 'double_payment',
  BUYER_REQUEST : 'buyer_request',
  FRAUD : 'fraud',
  OTHER : 'other'
} as const;

export const subscriptionInitialStatus = {
  ACTIVE : 'ACTIVE',
  PENDING : 'PENDING'
} as const;

export const subscriptionPlanInterval = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY'
} as const;

export const subscriptionStatus = {
  EXPIRED: 'EXPIRED',
  UNPAID: 'UNPAID',
  CANCELED: 'CANCELED',
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING',
  UPGRADED: 'UPGRADED'
} as const;

export const subscriptionUpgradePeriod = {
  NOW: 'NOW'
} as const;

export const paymentSource = {
  SHOPIFY: 'SHOPIFY',
  WOOCOMMERCE: 'WOOCOMMERCE',
  MAGENTO: 'MAGENTO',
  OPENCART: 'OPENCART',
  PRESTASHOP: 'PRESTASHOP',
} as const;

export const subMerchantType = {
  PERSONAL: 'PERSONAL',
  PRIVATE_COMPANY: 'PRIVATE_COMPANY',
  LIMITED_OR_JOINT_STOCK_COMPANY: 'LIMITED_OR_JOINT_STOCK_COMPANY'
} as const;
