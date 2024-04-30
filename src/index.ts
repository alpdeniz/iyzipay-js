// Imports
// =================================
import createClient from "@/client";
import { IyzicoConfig } from "@/types/config";

// Main Script
// =================================
const iyzico = (config: IyzicoConfig) => {
  return createClient(config);
};

// Exports
// =================================
export default iyzico;