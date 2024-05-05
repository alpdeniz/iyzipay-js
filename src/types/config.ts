// Imports
// =================================
import * as constants from "../utils/constants";
import {
  ApmCreateType,
  ApmRetrieveType,
  BinCheckType,
  BkmCreateType,
  BkmRetrieveType,
  CardStorageCreateType,
  CardStorageDeleteType,
  CardStorageRetrieveListType,
  CheckoutFormCreateType,
  CheckoutFormRetrieveType,
  IyziposCreateApprovalType,
  IyziposRetrieveInstallmentInfoType,
  Payment3DSecureCreateType,
  Payment3DSecureRetrieveType,
  PaymentCancelType,
  PaymentCreateType,
  PaymentRefundType,
  PaymentRetrieveType,
  SubmerchantCreateType,
  SubmerchantRetrieveType,
  SubmerchantUpdateType,
} from "./models";

// Types
// =================================
export type IyzicoConfig = {
  uri?: `http${string}`;
  apiKey: string;
  secretKey: string;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type ClientBase = typeof constants & {
  apiKey: string;
  secretKey: string;
  isSandbox: boolean;
};

export type Extended = Prettify<
  // disallow redefining base properties
  { [_ in keyof ClientBase]?: undefined } & {
    [key: string]: unknown;
  }
>;

export type IyzicoClient = ClientBase & {
  api: {
    healthCheck: () => Promise<any>;
  };
  payments: {
    apm: {
      create: (payload: ApmCreateType) => Promise<any>;
      retrieve: (payload: ApmRetrieveType) => Promise<any>;
    }
    binCheck: (payload: BinCheckType) => Promise<any>;
    bkm: {
      create: (payload: BkmCreateType) => Promise<any>;
      // createBasic: (payload: BkmCreateBasicType) => Promise<any>;
      retrieve: (payload: BkmRetrieveType) => Promise<any>;
    };
    create: (payload: PaymentCreateType) => Promise<any>;
    retrieve: (payload: PaymentRetrieveType) => Promise<any>;
    refund: (payload: PaymentRefundType) => Promise<any>;
    cancel: (payload: PaymentCancelType) => Promise<any>;
    threeDSecure: {
      create: (payload: Payment3DSecureCreateType) => Promise<any>;
      retrieve: (payload: Payment3DSecureRetrieveType) => Promise<any>;
    };
    checkoutForm: {
      create: (payload: CheckoutFormCreateType) => Promise<any>;
      retrieve: (payload: CheckoutFormRetrieveType) => Promise<any>;
    };
    iyzipos: {
      createApproval: (payload: IyziposCreateApprovalType) => Promise<any>;
      retrieveInstallmentInfo: (payload: IyziposRetrieveInstallmentInfoType) => Promise<any>;
    }
  };
  submerchant: {
    create: (payload: SubmerchantCreateType) => Promise<any>;
    update: (payload: SubmerchantUpdateType) => Promise<any>;
    retrieve: (payload: SubmerchantRetrieveType) => Promise<any>;
  };
  cardStorage: {
    create: (payload: CardStorageCreateType) => Promise<any>;
    retrieveList: (payload: CardStorageRetrieveListType) => Promise<any>;
    delete: (payload: CardStorageDeleteType) => Promise<any>;
  };
};
