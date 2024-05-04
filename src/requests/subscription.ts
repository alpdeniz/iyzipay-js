// Imports
// =================================
import type { BkmCreateBasicType, BkmCreateType, BkmRetreieveType } from "@/types/models";
import baseRequest from "@/utils/baseRequest";
import { formatPrice } from "@/utils/utils";
import { baseClient } from "@/client";
import { create } from "domain";

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