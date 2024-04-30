// Imports
// =================================
import * as constants from "@/utils/constants";

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

export type Client_Base = typeof constants & {
  apiKey: string;
  secretKey: string;
  isSandbox: boolean;
};

export type Extended = Prettify<
  // disallow redefining base properties
  { [_ in keyof Client_Base]?: undefined } & {
    [key: string]: unknown
  }
>