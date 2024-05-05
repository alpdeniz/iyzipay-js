// Imports
// =================================
import {
  currency,
  paymentChannel,
  installments,
  locale,
  paymentGroup,
  paymentSource,
  baseItemType,
  subMerchantType,
  refundReason,
  apmType,
} from "../utils/constants";

// Types
// =================================
// UNIVERSAL -----------------------
export type BasicRequestType = {
  connectorName: string;
  conversationId?: string;
  locale?: (typeof locale)[keyof typeof locale];
};

export type BasicBasketType = {
  basketId?: string;
  basketItems: BasketItemType[];
};

export type BasicBasketMerchantRequiredType = {
  basketId: string;
  basketItems: {
    id: string;
    name: string;
    category1?: string | undefined;
    category2?: string | undefined;
    itemType: (typeof baseItemType)[keyof typeof baseItemType];
    price: number | string;
    quantity?: number | undefined;
    subMerchantKey: string | undefined;
    subMerchantPrice: string | number | undefined;
  }[];
};

export type BasicAddresesType = {
  shippingAddress: AddressType;
  billingAddress: AddressType;
};

export type BasicPriceTypes = {
  price: string | number;
  paidPrice: string | number;
};

export type AddressType = {
  address: string;
  city: string;
  contactName: string;
  country: string;
  zipCode?: string;
};

export type BuyerType = {
  id: string;
  name: string;
  surname: string;
  identityNumber: string;
  email: string;
  gsmNumber?: string;
  registrationDate?: `${number}${number}${number}${number}-${number}${number}-${number}${number} ${number}${number}:${number}${number}:${number}${number}`;
  lastLoginDate?: `${number}${number}${number}${number}-${number}${number}-${number}${number} ${number}${number}:${number}${number}:${number}${number}`;
  registrationAddress: string;
  city: string;
  country: string;
  zipCode?: string;
  ip?: string;
};

// SPECIFIC -----------------------
export type ApmCreateType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  price: string | number;
  paidPrice: string | number;
  paymentChannel?: (typeof paymentChannel)[keyof typeof paymentChannel];
  paymentGroup?: (typeof paymentGroup)[keyof typeof paymentGroup];
  paymentSource?: (typeof paymentSource)[keyof typeof paymentSource];
  currency?: (typeof currency)[keyof typeof currency];
  merchantOrderId?: string;
  countryCode: string;
  accountHolderName: string;
  merchantCallbackUrl?: string;
  merchantErrorUrl?: string;
  merchantNotificationUrl?: string;
  apmType: typeof apmType[keyof typeof apmType];
  basketId?: string;
  buyer: {
    id: string;
    name: string;
    surname: string;
    identityNumber: string;
    email: string;
    gsmNumber: string;
    registrationDate?: string;
    lastLoginDate?: string;
    registrationAddress: string;
    city: string;
    country: string;
    zipCode?: string;
    ip?: string;
  }
  shippingAddress: {
    address: string;
    city: string;
    country: string;
    zipCode?: string;
    contactName: string;
  }
  billingAddress: {
    address: string;
    city: string;
    country: string;
    zipCode?: string;
    contactName: string;
  }
  basketItems: BasketItemType[];
};

export type ApmRetrieveType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  paymentId: string;
};

export type PaymentCreateType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  price: string | number;
  paidPrice: string | number;
  installment?: (typeof installments)[number];
  paymentChannel?: (typeof paymentChannel)[keyof typeof paymentChannel];
  basketId?: string;
  paymentGroup?: (typeof paymentGroup)[keyof typeof paymentGroup];
  paymentCard: {
    cardHolderName: string;
    cardNumber: `${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${
      | number
      | ""}`;
    expireMonth: `${number}${number}`;
    expireYear: `${number}${number}${number}${number}`;
    cvc: `${number}${number}${number}${number | ""}`;
    registerCard?: 0 | 1;
    cardAlias?: string;
    cardToken?: string;
    cardUserKey?: string;
    consumerToken?: string;
    registerConsumerCard?: 0 | 1;
    ucsToken?: string;
  };
  buyer: BuyerType;
  shippingAddress: AddressType;
  billingAddress: AddressType;
  basketItems: BasketItemType[];
  paymentSource?: (typeof paymentSource)[keyof typeof paymentSource];
  currency?: (typeof currency)[keyof typeof currency];
  gsmNumber?: string;
  posOrderId?: string;
  connectorName?: string;
  callbackUrl?: string;
};

/**
 *
 */
export type PaymentRetrieveType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId: string;
  paymentId: string;
  paymentConversationId?: string;
};

export type PaymentRefundType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  paymentTransactionId: string;
  price: string | number;
  currency?: (typeof currency)[keyof typeof currency];
  ip?: string;
  reason?: (typeof refundReason)[keyof typeof refundReason];
  description?: string;
};

export type PaymentCancelType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  paymentId: string;
  ip?: string;
};

//

export type CheckoutFormCreateType = {
  // Required
  conversationId?: string;
  price: string | number;
  paidPrice: string | number;
  buyer: BuyerType;
  shippingAddress: AddressType;
  billingAddress: AddressType;
  basketItems: BasketItemType[];
  callbackUrl: string;
  // Optional
  locale?: (typeof locale)[keyof typeof locale];
  basketId?: string;
  paymentGroup?: (typeof paymentGroup)[keyof typeof paymentGroup];
  enabledInstallments?: Array<1 | 2 | 3 | 6 | 9>;
  posOrderId?: string;
  forceThreeDS?: string;
  cardUserKey?: string;
  currency?: (typeof currency)[keyof typeof currency];
};

export type CheckoutFormRetrieveType = {
  conversationId?: string;
  locale?: (typeof locale)[keyof typeof locale];
  token: string;
};

export type BinCheckType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  binNumber: `${number}${number}${number}${number}${number}${number}`;
};

export type SubmerchantCreateType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  name?: string;
  email?: string;
  gsmNumber?: string;
  address?: string;
  iban?: string;
  taxOffice?: string;
  contactName?: string;
  contactSurname?: string;
  legalCompanyTitle?: string;
  swiftCode?: string;
  currency?: (typeof currency)[keyof typeof currency];
  subMerchantExternalId?: string;
  identityNumber?: string;
  taxNumber?: string;
  subMerchantType?: (typeof subMerchantType)[keyof typeof subMerchantType];
};

export type SubmerchantRetrieveType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  subMerchantExternalId: string;
};

export type SubmerchantUpdateType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  name?: string;
  email?: string;
  gsmNumber?: string;
  address?: string;
  iban?: string;
  contactName?: string;
  contactSurname?: string;
  currency?: (typeof currency)[keyof typeof currency];
  subMerchantKey: string;
  identityNumber?: string;
  taxOffice?: string;
  legalCompanyTitle?: string;
  swiftCode?: string;
  taxNumber?: string;
};

export type CardStorageCreateType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  externalId: string;
  email?: string;
  cardUserKey?: string;
  card: {
    cardAlias: string;
    cardNumber: `${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${
      | number
      | ""}`;
    expireYear: `${number}${number}${number}${number}`;
    expireMonth: `${number}${number}`;
    cardHolderName: string;
  };
};

export type CardStorageRetrieveListType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  cardUserKey: string;
};

export type CardStorageDeleteType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  cardUserKey: string;
  cardToken: string;
};

export type Payment3DSecureCreateType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  price: string | number;
  paidPrice: string | number;
  installment?: (typeof installments)[number];
  paymentChannel?: (typeof paymentChannel)[keyof typeof paymentChannel];
  basketId?: string;
  paymentGroup?: (typeof paymentGroup)[keyof typeof paymentGroup];
  paymentCard: PaymentCardType;
  buyer: BuyerType;
  shippingAddress: AddressType;
  billingAddress: AddressType;
  basketItems: BasketItemType[];
  currency?: (typeof currency)[keyof typeof currency];
  callbackUrl?: string;
  paymentSource?: (typeof paymentSource)[keyof typeof paymentSource];
  gsmNumber?: string;
  posOrderId?: string;
  connectorName?: string;
};

export type Payment3DSecureRetrieveType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  paymentId: string;
  paymentConversationId?: string;
};

export type BkmCreateBasicType = BasicRequestType &
  Omit<BasicPriceTypes, "paidPrice"> & {
    callbackUrl?: string;
    paymentGroup?: (typeof paymentGroup)[keyof typeof paymentGroup];
    buyerEmail: string;
    buyerId: string;
    buyerIp?: string;
    posOrderId?: string;
    installmentsDetails: {
      bankId: string;
      installmentPrices: {
        installmentNumber: string;
        totalPrice: string | number;
      }[];
    }[];
  };

export type IyziposRetrieveInstallmentInfoType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  binNumber: string;
  price: string | number;
  currency?: (typeof currency)[keyof typeof currency];
};

export type IyziposCreateApprovalType = {
  locale?: (typeof locale)[keyof typeof locale];
  conversationId?: string;
  paymentTransactionId: string;
};

// TBD =================================

// export type ApmCreateType = Omit<BasicRequestType, "connectorName"> &
//   BasicBasketType &
//   BasicAddresesType & {
//     accountHolderName?: string;
//     apmType?: string;
//     buyer?: BuyerType;
//     countryCode?: string;
//     currency?: (typeof currency)[keyof typeof currency];
//     merchantErrorUrl?: string;
//     merchantCallbackUrl?: string;
//     merchantNotificationUrl?: string;
//     merchantOrderId?: string;
//     paidPrice?: string | number;
//     paymentChannel?: string;
//     paymentGroup?: string;
//     paymentSource?: (typeof paymentSource)[keyof typeof paymentSource];
//     price?: string | number;
//   };

export type ApprovalCreateRevokeType = BasicRequestType & {
  paymentTransactionId?: string;
};

// BasicPaymentType &
export type BkmCreateType = Omit<BasicRequestType, "connectorName"> &
  BasicBasketMerchantRequiredType &
  BasicAddresesType & {
    price: string | number;
    paymentSource?: string;
    enabledInstallments?: Array<1 | 2 | 3 | 6 | 9>;
    paymentGroup?: string;
    buyer: BuyerType;
    callbackUrl?: string;
  };

// export type BkmCreateBasicType = Omit<BkmCreateType, "basic" | "paymentSource" | "enabledInstallments" | "paymentGroup" | "buyer"> & {
//   installmentDetails?: BkmInstallmentType[];
//   buyerEmail?: string;
//   buyerId?: string;
//   buyerIp?: string;
//   posOrderId?: string;
// };

export type BkmRetrieveType = Omit<BasicRequestType, "connectorName"> & {
  token: string;
};

export type SubscriptionCustomerType = Omit<
  BuyerType,
  | "registrationDate"
  | "lastLoginDate"
  | "registrationAddress"
  | "city"
  | "country"
  | "zipCode"
  | "ip"
> &
  BasicAddresesType;

export type BasketItemType = {
  id: string;
  name: string;
  category1?: string;
  category2?: string;
  itemType: (typeof baseItemType)[keyof typeof baseItemType];
  price: number | string;
  quantity?: number;
  subMerchantKey?: string;
  subMerchantPrice?: number | string;
};

export type SubscriptionAddressType = AddressType & {
  district?: string;
};

export type BasicPaymentType = BasicRequestType & {
  price?: string | number;
  paidPrice?: string | number;
  installment?: string;
  buyerEmail?: string;
  buyerId?: string;
  buyerIp?: string;
  posOrderId?: string;
  paymentCard?: PaymentCardType;
  currency?: (typeof currency)[keyof typeof currency];
  callbackUrl?: string;
};

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
};

export type BkmInstallmentPriceType = {
  installmentNumber?: string;
  totalPrice?: number | string;
};

export type BkmInstallmentType = {
  bankId?: string;
  installmentPrices?: BkmInstallmentPriceType[];
};

export type CardInformationType = {
  cardAlias?: string;
  cardNumber?: string;
  expireYear?: string;
  expireMonth?: string;
  cardHolderName?: string;
};

export type PaginationType = BasicRequestType & {
  page?: string | number;
  count?: string | number;
};

export type PaymentType = BasicRequestType &
  BasicBasketType &
  BasicAddresesType & {
    price?: string | number;
    paidPrice?: string | number;
    installment?: string;
    paymentChannel?: string;

    paymentGroup?: string;
    paymentCard?: CardInformationType;
    buyer?: BuyerType;

    paymentSource?: string;
    currency?: (typeof currency)[keyof typeof currency];
    gsmNumber?: string;
    posOrderId?: string;
    callbackUrl?: string;
  };

export type PaymentItemType = {
  subMerchantKey?: string;
  subMerchantPrice?: string | number;
  paymentTransactionId?: string;
};

export type SubscriptionPricingPlanType = BasicRequestType & {
  name?: string;
  price?: string | number;
  currencyCode?: (typeof currency)[keyof typeof currency];
  paymentInterval?: string;
  paymentIntervalCount?: number;
  trialPeriodDays?: number;
  planPaymentType?: string;
};

export type SubscriptionProductType = BasicRequestType & {
  name?: string;
  description?: string;
};
