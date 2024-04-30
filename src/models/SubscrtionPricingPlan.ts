// Imports
// =================================
import { SubscriptionPricingPlanType } from "@/types/models";
import { formatPrice } from "@/utils/utils";

// Model
// =================================
export default function (data?: SubscriptionPricingPlanType) {
  if (!data) return undefined;
  return {
    locale: data?.['locale'],
    conversationId: data?.['conversationId'],
    name: data?.['name'],
    price: data?.['price'] ? formatPrice(data?.['price']) : undefined,
    currencyCode: data?.['currencyCode'],
    paymentInterval: data?.['paymentInterval'],
    paymentIntervalCount: data?.['paymentIntervalCount'],
    trialPeriodDays: data?.['trialPeriodDays'],
    planPaymentType: data?.['planPaymentType']
  };
}
