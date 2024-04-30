import { currency, locale } from "@/utils/constants";

export type ApmType = {
  locale?: typeof locale[keyof typeof locale];
  conversationId?: string;
  price?: string | number;
  paidPrice?: string | number;
  paymentChannel?: string;
  paymentGroup?: string;
  paymentSource?: string;
  currency?: typeof currency[keyof typeof currency];
  merchantOrderId?: string;
  countryCode?: string;
  accountHolderName?: string;
  merchantCallbackUrl?: string;
  merchantErrorUrl?: string;
  merchantNotificationUrl?: string;
  apmType?: string;
  basketId?: string;
  buyer?: BuyerType;
  shippingAddress?: AddressType;
  billingAddress?: AddressType;
  basketItems?: BasketItemType[];
}

export type CheckoutFormCreateType = Omit<ApmType, "paymentChannel" | "merchantOrderId" | "countryCode"| "accountHolderName" | "merchantCallbackUrl"| "merchantErrorUrl" | "merchantNotificationUrl" | "apmType"> & {
  callbackUrl?: string;
  posOrderId?: string;
  forceThreeDS?: string;
  cardUserKey?: string;
  enabledInstallments?: Array<1 | 2 | 3 | 6 | 9>;
}

export type BuyerType = {
  id?: string;
  name?: string;
  surname?: string;
  identityNumber?: string;
  email?: string;
  gsmNumber?: string;
  registrationDate?: string;
  lastLoginDate?: string;
  registrationAddress?: string;
  city?: string;
  country?: string;
  zipCode?: string;
  ip?: string;
}

export type SubscriptionCustomerType = Omit<BuyerType, "registrationDate" | "lastLoginDate" | "registrationAddress" | "city" | "country" | "zipCode" | "ip"> & {
  billingAddress?: SubscriptionAddressType;
  shippingAddress?: SubscriptionAddressType;
}

export type BasketItemType = {
  id: string;
  name: string;
  category1?: string;
  category2?: string;
  itemType?: "PHYSICAL" | "VIRTUAL";
  price?: number | string;
  quantity?: number;
  subMerchantKey?: string;
  subMerchantPrice?: number | string;
};

export type AddressType = {
  address?: string;
  zipCode?: string;
  contactName?: string;
  city?: string;
  country?: string;
}

export type SubscriptionAddressType = AddressType & {
  district?: string;
}

export type BasicPaymentType = {
  locale?: typeof locale[keyof typeof locale];
  conversationId?: string;
  price?: string | number;
  paidPrice?: string | number;
  installment?: string;
  buyerEmail?: string;
  buyerId?: string;
  buyerIp?: string;
  posOrderId?: string;
  paymentCard?: PaymentCardType;
  currency?: typeof currency[keyof typeof currency];
  connectorName?: string;
  callbackUrl?: string;
}

export type PaymentCardType = {
  cardHolderName?: string;
  cardNumber?: string;
  expireMonth?: string;
  expireYear?: string;
  cvc?: string;
  registerCard?: number;
  cardAlias?: string;
  cardToken?: string;
  cardUserKey?: string;
  consumerToken?: string;
  registerConsumerCard?: number;
  ucsToken?: string;
}

export type BkmInstallmentPriceType = { 
  installmentNumber?: string; 
  totalPrice?: number | string; 
}

export type BkmInstallmentType = {  
  bankId?: string;
  installmentPrices?: BkmInstallmentPriceType[];
}

export type CardInformationType = { 
  cardAlias?: string; 
  cardNumber?: string;
  expireYear?: string;
  expireMonth?: string;
  cardHolderName?: string; 
}

export type PaginationType = {
  locale?: typeof locale[keyof typeof locale];
  conversationId?: string;
  page?: string | number;
  count?: string | number;
}

export type PaymentType = {
  locale?: typeof locale[keyof typeof locale];
  conversationId?: string;
  price?: string | number;
  paidPrice?: string | number;
  installment?: string;
  paymentChannel?: string;
  basketId?: string;
  paymentGroup?: string;
  paymentCard?: CardInformationType;
  buyer?: BuyerType;
  shippingAddress?: AddressType;
  billingAddress?: AddressType;
  basketItems?: BasketItemType[];
  paymentSource?: string;
  currency?: typeof currency[keyof typeof currency];
  gsmNumber?: string;
  posOrderId?: string;
  connectorName?: string;
  callbackUrl?: string;
}

export type PaymentItemType = {
  subMerchantKey?: string;
  subMerchantPrice?: string | number;
  paymentTransactionId?: string;
}

export type SubscriptionPricingPlanType = {
  locale?: typeof locale[keyof typeof locale];
  conversationId?: string;
  name?: string;
  price?: string | number;
  currencyCode?: typeof currency[keyof typeof currency];
  paymentInterval?: string;
  paymentIntervalCount?: number;
  trialPeriodDays?: number;
  planPaymentType?: string;
}

export type SubscriptionProductType = {
  locale?: typeof locale[keyof typeof locale];
  conversationId?: string;
  name?: string;
  description?: string;
}