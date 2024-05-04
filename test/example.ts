// Imports
// =================================
import iyzico from "../src";
import { config } from "dotenv";

// Config
// =================================
config();

const CARDS: `${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number}${number | ""}`[] = [
  "5890040000000016",
  "5526080000000006",
  "4766620000000001",
  "4603450000000000",
  "4729150000000005",
  "4987490000000002",
  "5311570000000005",
  "9792020000000001",
  "9792030000000000",
  "5170410000000004",
  "5400360000000003",
  "4475050000000003",
  "5528790000000008",
  "4059030000000009",
  "5504720000000003",
];

// Main Script
// =================================
const main = async () => {
  console.group("main");
  console.log({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });
  // init iyzico client
  const client = iyzico({
    apiKey: `${process.env.IYZICO_API_KEY}`,
    secretKey: `${process.env.IYZICO_SECRET_KEY}`,
  });

  // client.

// ^ client.apiTest.retrieve

  // client.payment.asd

  const responseCheckoutFormCreate = await client.payment.checkoutForm.create({
    "locale": "tr",
    "conversationId": "123456789",
    "price": "1.0",
    "basketId": "B67832",
    "paymentGroup": "PRODUCT",
    // "paymentChannel": "WEB",
    "buyer": {
        "id": "BY789",
        "name": "John",
        "surname": "Doe",
        "identityNumber": "74300864791",
        "email": "email@email.com",
        "gsmNumber": "+905350000000",
        "registrationDate": "2013-04-21 15:12:09",
        "lastLoginDate": "2015-10-05 12:43:35",
        "registrationAddress": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        "city": "Istanbul",
        "country": "Turkey",
        "zipCode": "34732",
        "ip": "85.34.78.112"
    },
    "shippingAddress": {
        "address": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        "zipCode": "34742",
        "contactName": "Jane Doe",
        "city": "Istanbul",
        "country": "Turkey"
    },
    "billingAddress": {
        "address": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        "zipCode": "34742",
        "contactName": "Jane Doe",
        "city": "Istanbul",
        "country": "Turkey"
    },
    // "paymentSource": "MAGENTO",
    "basketItems": [
        {
            "id": "BI101",
            "price": "0.3",
            "name": "Binocular",
            "category1": "Collectibles",
            "category2": "Accessories",
            "itemType": "PHYSICAL"
        },
        {
            "id": "BI102",
            "price": "0.5",
            "name": "Game code",
            "category1": "Game",
            "category2": "Online Game Items",
            "itemType": "VIRTUAL"
        },
        {
            "id": "BI103",
            "name": "Usb",
            "price": "0.2",
            "category1": "Electronics",
            "category2": "Usb / Cable",
            "itemType": "PHYSICAL"
        }
    ],
    "enabledInstallments": [
        1,
        2,
        3,
        6,
        9
    ],
    "callbackUrl": "https://www.merchant.com/callback",
    "currency": "TRY",
    "paidPrice": "1.2"
  });

  console.log({ responseCheckoutFormCreate });

  // const responseCheckoutFormRetrieve = await client.payment.checkoutForm.retrieve({
  //   "locale": "tr",
  //   "conversationId": "123456789",
  //   "token": responseCheckoutFormCreate?.token
  // });

  // console.log({ responseCheckoutFormRetrieve });
/*
  const responsePaymentCreate = await client.payment.create(
    {
      "locale": "tr",
      "conversationId": "123456789",
      "price": "1.0",
      "paidPrice": "1.1",
      "installment": 1,
      "paymentChannel": "WEB",
      "basketId": "B67832",
      "paymentGroup": "PRODUCT",
      "paymentCard": {
          "cardHolderName": "John Doe",
          "cardNumber": `${CARDS[Math.floor(Math.random() * CARDS.length)]}`,
          "expireYear": "2030",
          "expireMonth": "12",
          "cvc": "123",
          "registerCard": 0
      },
      "buyer": {
          "id": "BY789",
          "name": "John",
          "surname": "Doe",
          "identityNumber": "74300864791",
          "email": "email@email.com",
          "gsmNumber": "+905350000000",
          "registrationDate": "2013-04-21 15:12:09",
          "lastLoginDate": "2015-10-05 12:43:35",
          "registrationAddress": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          "city": "Istanbul",
          "country": "Turkey",
          "zipCode": "34732",
          "ip": "85.34.78.112"
      },
      "shippingAddress": {
          "address": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          "zipCode": "34742",
          "contactName": "Jane Doe",
          "city": "Istanbul",
          "country": "Turkey"
      },
      "billingAddress": {
          "address": "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          
          "contactName": "Jane Doe",
          "city": "Istanbul",
          "country": "Turkey"
      },
      "basketItems": [
          {
              "id": "BI101",
              "price": "0.3",
              "name": "Binocular",
              "category1": "Collectibles",
              "category2": "Accessories",
              "itemType": "PHYSICAL"
          },
          {
              "id": "BI102",
              "price": "0.5",
              "name": "Game code",
              "category1": "Game",
              "category2": "Online Game Items",
              "itemType": "VIRTUAL"
          },
          {
              "id": "BI103",
              "price": "0.2",
              "name": "Usb",
              "category1": "Electronics",
              "category2": "Usb / Cable",
              "itemType": "PHYSICAL"
          }
      ],
      "currency": "TRY"
  }
);

  console.log({ responsePaymentCreate });

// // =================================
const responsePaymentRetrieve = await client.payment.retrieve({
    "locale": "tr",
    "conversationId": "123456789",
    "paymentId": responsePaymentCreate?.paymentId, // "22144068",// "22144041",
    "paymentConversationId": "123456789",
  });

  console.log({ responsePaymentRetrieve });
// // =================================

// const itemTransactions = responsePaymentRetrieve.itemTransactions;

// const responsePaymentRefund0 = await client.payment.refund({
//   "locale": "tr",
//   "conversationId": "123456789",
//   "paymentTransactionId": itemTransactions[0].paymentTransactionId,
//   "price": itemTransactions[0].paidPrice,
//   "ip": "85.34.78.112",
//   "currency": "TRY",
//   "reason": "other",
//   "description": "customer request description"
// });

// console.log({ responsePaymentRefund0 });

// const responsePaymentRefund1 = await client.payment.refund({
//   "locale": "tr",
//   "conversationId": "123456789",
//   "paymentTransactionId": itemTransactions[1].paymentTransactionId,
//   "price": itemTransactions[1].paidPrice,
//   "ip": "85.34.78.112",
//   "currency": "TRY",
//   "reason": "other",
//   "description": "customer request description"
// });

// console.log({ responsePaymentRefund1 });

// const responsePaymentRefund2 = await client.payment.refund({
//   "locale": "tr",
//   "conversationId": "123456789",
//   "paymentTransactionId": itemTransactions[2].paymentTransactionId,
//   "price": itemTransactions[2].paidPrice,
//   "ip": "85.34.78.112",
//   "currency": "TRY",
//   "reason": "other",
//   "description": "customer request description"
// });

// console.log({ responsePaymentRefund2 });

// // =================================

const responsePaymentCancel = await client.payment.cancel({
    "locale": "tr",
    "conversationId": "123456789",
    "paymentId": responsePaymentCreate?.paymentId, // "22144068",// "22144041",
    "ip": "85.34.78.112"
});

console.log({ responsePaymentCancel });


// for (let i = 0; i < itemTransactions.length; i++) {
//   const itemTransaction = itemTransactions[i];
//   const responsePaymentRefund = await client.payment.refund({
//     "locale": "tr",
//     "conversationId": "123456789",
//     "paymentTransactionId": itemTransaction.paymentTransactionId,
//     "price": itemTransaction.paidPrice,
//     "ip": "


// const responsePaymentRefund = await client.payment.refund({
//     "locale": "tr",
//     "conversationId": "123456789",
//     "paymentTransactionId": "24079837", // "24079805", // 24079805
//     "price": "0.3",
//     "ip": "85.34.78.112"
// });

// console.log({ responsePaymentRefund });

  // const testResponse = await client.apiTest.retrieve();
  // console.log({ testResponse });

  // const response = await client.checkoutForm.create(
    //{
  //   locale: 'tr',
  //   conversationId: '123456789',
  //   price: '1.0',
  //   basketId: 'B67832',
  //   paymentGroup: 'PRODUCT',
  //   buyer: {
  //     id: 'BY789',
  //     name: 'John',
  //     surname: 'Doe',
  //     identityNumber: '74300864791',
  //     email: 'email@email.com',
  //     gsmNumber: '+905350000000',
  //     registrationDate: '2013-04-21 15:12:09',
  //     lastLoginDate: '2015-10-05 12:43:35',
  //     registrationAddress: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
  //     city: 'Istanbul',
  //     country: 'Turkey',
  //     zipCode: '34732',
  //     ip: '85.34.78.112'
  //   },
  //   shippingAddress: {
  //     address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
  //     zipCode: '34742',
  //     contactName: 'Jane Doe',
  //     city: 'Istanbul',
  //     country: 'Turkey'
  //   },
  //   billingAddress: {
  //     address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
  //     zipCode: '34742',
  //     contactName: 'Jane Doe',
  //     city: 'Istanbul',
  //     country: 'Turkey'
  //   },
  //   basketItems: [
  //     {
  //       id: 'BI101',
  //       price: '0.3',
  //       name: 'Binocular',
  //       category1: 'Collectibles',
  //       category2: 'Accessories',
  //       itemType: 'PHYSICAL'
  //     },
  //     {
  //       id: 'BI102',
  //       price: '0.5',
  //       name: 'Game code',
  //       category1: 'Game',
  //       category2: 'Online Game Items',
  //       itemType: 'VIRTUAL'
  //     },
  //     {
  //       id: 'BI103',
  //       name: 'Usb',
  //       price: '0.2',
  //       category1: 'Electronics',
  //       category2: 'Usb / Cable',
  //       itemType: 'PHYSICAL'
  //     }
  //   ],
  //   enabledInstallments: [ 1, 2, 3, 6, 9 ],
  //   callbackUrl: 'https://www.merchant.com/callback',
  //   currency: 'TRY',
  //   paidPrice: '1.2'
  // }
//);

  // console.log({ response });
*/
  console.groupEnd();
};

// Init
// =================================
main()
  .then(() => {
    console.log("Script complete!");
  })
  .catch((err) => {
    console.error({ err });
  });
