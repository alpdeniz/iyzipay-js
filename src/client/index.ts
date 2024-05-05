// Imports
// =================================
import { apiTest, cardStorage, payment, submerchant } from "../requests";
import type { Extended, IyzicoConfig } from "../types/config";
import * as constants from "../utils/constants";

// Client Setup
// =================================
/**
 * Base setup for client
 * @param config 
 * @returns 
 */
export const baseClient = (config: IyzicoConfig) => {
  // Check if sandbox
  const isSandbox = config.apiKey.includes('sandbox') || config.secretKey.includes('sandbox');

  // Handle if config uri is not set
  const parsedConfig = { ...config };
  if (!parsedConfig.uri) {
    parsedConfig.uri = isSandbox
      ? `${constants.apiUrl.SANDBOX}`
      : `${constants.apiUrl.PRODUCTION}`
  }

  // Create client
  const client = {
    ...constants,
    ...parsedConfig,
    isSandbox
  };

  // Allow extending the client
  function extend(base: typeof client) {
    type ExtendFn = (base: typeof client) => unknown
    return (extendFn: ExtendFn) => {
      const extended = extendFn(base) as Extended
      for (const key in client) delete extended[key]
      const combined = { ...base, ...extended }
      return Object.assign(combined, { extend: extend(combined as any) })
    }
  }

  // Return extending
  return Object.assign(client, { extend: extend(client) as any });
}

/**
 * Main createClient
 * @param config 
 * @returns 
 */
export default function createClient (config: IyzicoConfig): ReturnType<typeof baseClient> & {
  apiTest: ReturnType<typeof apiTest>;
  payment: ReturnType<typeof payment>;
  submerchant: ReturnType<typeof submerchant>;
  cardStorage: ReturnType<typeof cardStorage>;
} {
  const base = baseClient(config);
  return {
    ...base,
    apiTest: apiTest(base),
    payment: payment(base),
    submerchant: submerchant(base),
    cardStorage: cardStorage(base),
  };
}
  
