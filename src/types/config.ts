// Imports
// =================================
import { baseClient } from "../client";
import { apiTest, payment, submerchant } from "../requests";
import * as constants from "../utils/constants";

// Types
// =================================
export type IyzicoConfig = {
  uri?: `http${string}`,
  apiKey: string,
  secretKey: string
};

export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {};

export type ClientBase = typeof constants & {
  apiKey: string;
  secretKey: string;
  isSandbox: boolean;
};

export type Extended = Prettify<
  // disallow redefining base properties
  { [_ in keyof ClientBase]?: undefined } & {
    [key: string]: unknown
  }
>;

export type IyzicoClient = ReturnType<typeof baseClient> & {
  apiTest: ReturnType<typeof apiTest>;
  payment: ReturnType<typeof payment>;
  submerchant: ReturnType<typeof submerchant>;
};