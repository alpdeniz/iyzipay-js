// Imports
// =================================
import createClient from "./client";
import { IyzicoClient, IyzicoConfig } from "./types/config";

// Main Script
// =================================
const iyzico = (config: IyzicoConfig): IyzicoClient => {
  return createClient(config);
};

// Exports
// =================================
export default iyzico;