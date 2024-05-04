/**
 * @dev Test cards
 */
export const CARDS = {
  default: [
  { cardNumber: "5890040000000016" , bank: "Akbank", provider: "Master Card", type: "Debit" },
  { cardNumber: "5526080000000006" , bank: "Akbank", provider: "Master Card", type: "Credit"},
  { cardNumber: "4766620000000001" , bank: "Denizbank", provider: "Visa", type: "Debit"},
  { cardNumber: "4603450000000000" , bank: "Denizbank", provider: "Visa", type: "Credit"},
  { cardNumber: "4729150000000005" , bank: "Denizbank Bonus", provider: "Visa", type: "Credit"},
  { cardNumber: "4987490000000002" , bank: "Finansbank", provider: "Visa", type: "Debit"},
  { cardNumber: "5311570000000005" , bank: "Finansbank", provider: "Master Card", type: "Credit"},
  { cardNumber: "9792020000000001" , bank: "Finansbank", provider: "Troy", type: "Debit"},
  { cardNumber: "9792030000000000" , bank: "Finansbank", provider: "Troy", type: "Credit"},
  { cardNumber: "5170410000000004" , bank: "Garanti Bankası", provider: "Master Card", type: "Debit"},
  { cardNumber: "5400360000000003" , bank: "Garanti Bankası", provider: "Master Card", type: "Credit"},
  { cardNumber: "374427000000003	" , bank: "Garanti Bankası", provider: "American Express"},
  { cardNumber: "4475050000000003" , bank: "Halkbank", provider: "Visa", type: "Debit"},
  { cardNumber: "5528790000000008" , bank: "Halkbank", provider: "Master Card", type: "Credit"},
  { cardNumber: "4059030000000009" , bank: "HSBC Bank", provider: "Visa", type: "Debit"},
  { cardNumber: "5504720000000003" , bank: "HSBC Bank", provider: "Master Card", type: "Credit"},
  { cardNumber: "5892830000000000" , bank: "Türkiye İş Bankası", provider: "Master Card", type: "Debit"},
  { cardNumber: "4543590000000006" , bank: "Türkiye İş Bankası", provider: "Visa", type: "Credit"},
  { cardNumber: "4910050000000006" , bank: "Vakıfbank", provider: "Visa", type: "Debit"},
  { cardNumber: "4157920000000002" , bank: "Vakıfbank", provider: "Visa", type: "Credit"},
  { cardNumber: "5168880000000002" , bank: "Yapı ve Kredi Bankası", provider: "Master Card", type: "Debit"},
  { cardNumber: "5451030000000000" , bank: "Yapı ve Kredi Bankası", provider: "Master Card", type: "Credit"},
  ],
  crossBorder: [
    {
      cardNumber: "4054180000000007", bank: "Non-Turkish", provider: "Visa", type: "Debit",
    },
    {
      cardNumber: "5400010000000004", bank: "Non-Turkish", provider: "Master Card", type: "Credit",
    },
    {
      cardNumber: "6221060000000004", bank: "Iran", provider: "Unknown", type: "Unknown",
    },
  ],
  error: {
    SUCCESS_CANNOT_CANCEL_REFUND_POSTAUTH: {
      cardNumber: "5890040000000016", bank: "Unknown", provider: "Master Card", type: "Unknown", description: "Success but cannot be cancelled, refund or post auth"
    },
    INSUFFICIENT_FUNDS: {
      cardNumber: "4111111111111129", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Not sufficient funds"
    },
    DO_NOT_HONOUR: {
      cardNumber: "4129111111111111", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Do not honour"
    },
    INVALID_TRANSACTION: {
      cardNumber: "4128111111111112", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Invalid transaction"
    },
    LOST_CARD: {
      cardNumber: "4127111111111113", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Lost card"
    },
    STOLEN_CARD: {
      cardNumber: "4126111111111114", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Stolen card"
    },
    EXPIRED_CARD: {
      cardNumber: "4125111111111115", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Expired card"
    },
    INVALID_CVC2: {
      cardNumber: "4124111111111116", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Invalid cvc2"
    },
    NOT_PERMITTED_CARD_HOLDER: {
      cardNumber: "4123111111111117", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Not permitted to card holder"
    },
    NOT_PERMITTED_TERMINAL: {
      cardNumber: "4122111111111118", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Not permitted to terminal"
    },
    FRAUD_SUSPECTED: {
      cardNumber: "4121111111111119", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Fraud suspect"
    },
    PICKUP_CARD: {
      cardNumber: "4120111111111110", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Pickup card"
    },
    GENERAL_ERROR: {
      cardNumber: "4130111111111118", bank: "Unknown", provider: "Visa", type: "Unknown", description: "General error"
    },
    SUCCESS_BUT_MDSTATUS_0: {
      cardNumber: "4131111111111117", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Success but mdStatus is 0"
    },
    SUCCESS_BUT_MDSTATUS_4: {
      cardNumber: "4141111111111115", bank: "Unknown", provider: "Visa", type: "Unknown", description: "Success but mdStatus is 4"
    },
    THREEDSECURE_FAILED: {
      cardNumber: "4151111111111112", bank: "Unknown", provider: "Visa", type: "Unknown", description: "3dsecure initialize failed"
    }
  }
};

/**
 * @dev Test APM accounts
 */
export const MOCK_APM_ACCOUNTS = {
  SUCCESS: {
    accountHolder: "success",
    description: "Succeeded payment after succeeded initialize"
  },
  FAIL_AFTER_INIT: {
    accountHolder: "fail-after-init",
    description: "Failed payment after succeeded initialize"
  },
  ERROR: {
    accountHolder: "error",
    description: "Failed initialize"
  },
};