// Imports
// =================================
import type { BkmCreateType } from "../types/models";
import { baseClient } from "../client";

/**
 * @dev EN:
 * @dev TR:
 * @param client
 * @returns
 */
export default function (client: ReturnType<typeof baseClient>) {
  return {
    /**
     * @dev EN:
     * @dev TR:
     * @param payload
     */
    create: (payload?: BkmCreateType) => {
    },
    activate: () => {
    },
    upgrade: () => {
    },
    get: () => {
    },
    retry: () => {
    },
    search: () => {
    },
    card: {
      update: () => {
      },
      updateWithRefCode: () => {
      },
    },
    checkout: {
      create: () => {
      },
      retrieve: () => {
      },
    },
    customers: {
      create: () => {
      },
      update: () => {
      },
      retrieve: () => {
      },
      list: () => {
      }
    },
    products: {
      create: () => {
      },
      update: () => {
      },
      retrieve: () => {
      },
      delete: () => {
      },
      list: () => {
      }
    }
  }
};