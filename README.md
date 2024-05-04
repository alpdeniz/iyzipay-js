# Iyzipay JS SDK

> Türkçemi bağışlayın, bu metnin tamamı otomatik olarak çevrilmiştir.

EN: An alternative TypeScript SDK for iyzico payment service.
TR: iyzico ödeme servisi için alternatif bir TypeScript SDK.

> NOTE EN: This project is not affiliated with iyzico. This is an unofficial SDK. This sdk is also still a work in progress.
> NOT TR: Bu proje iyzico ile ilişkili değildir. Bu resmi olmayan bir SDK'dır. Bu sdk hala geliştirme aşamasındadır.

**Goal EN:** Allow this SDK to work in other environments and frameworks like NextJS and potentially React Native.
**Goal TR:** Bu SDK'nın NextJS ve potansiyel olarak React Native gibi diğer ortamlarda ve çerçevelerde çalışmasına izin vermek.

## Requirements

- NVM or Node.js `v20.12.2` or greater

## Quick Setup

### 1 - Install Depdenencies

```bash
# FROM: ./

pnpm install;
```

### 2 - Add Environment Variables

```bash
# FROM: ./

cp .env.example .env;
```

**File:** `./.env`

```bash
IYZICO_API_KEY="<YOUR_IYZICO_API_KEY>"
IYZICO_SECRET_KEY="<YOUR_IYZICO_SECRET_KEY>"
IYZICO_BASE_URL="https://sandbox-api.iyzipay.com" # Optional
```

### 3 - Run Tests

#### Example Test

```bash
# FROM: ./

pnpm test:example;

# [Expected Output]:
# ...
# {
#   response: {
#     status: "success",
#     locale: "tr",
#     systemTime: 1714445286140,
#     conversationId: "123456789",
#     token: "<GENERATED_TOKEN>",
#     checkoutFormContent: "<script type=\"text/javascript\">if (typeof iyziInit == 'undefined') {var iyziInit = {currency:\"TRY\",token:\"<GENERATED_TOKEN>\",price:1.20,locale:\"tr\",baseUrl:\"https://sandbox-api.iyzipay.com\", merchantGatewayBaseUrl:\"https://sandbox-merchantgw.iyzipay.com\", registerCardEnabled:false,bkmEnabled:true,bankTransferEnabled:false,bankTransferTimeLimit:{\"value\":5,\"type\":\"day\"},bankTransferRedirectUrl:\"https://www.merchant.com/callback\",bankTransferCustomUIProps:{},campaignEnabled:false,campaignMarketingUiDisplay:{},paymentSourceName:\"\",plusInstallmentResponseList:null,payWithIyzicoSingleTab:false,payWithIyzicoSingleTabV2:false,payWithIyzicoOneTab:false,newDesignEnabled:false,mixPaymentEnabled:true,creditCardEnabled:true,bankTransferAccounts:[],userCards:[],fundEnabled:false,memberCheckoutOtpData:{},force3Ds:false,isSandbox:true,storeNewCardEnabled:true,paymentWithNewCardEnabled:true,enabledApmTypes:[\"SOFORT\",\"IDEAL\",\"QIWI\",\"GIROPAY\"],payWithIyzicoUsed:false,payWithIyzicoEnabled:false,payWithIyzicoCustomUI:{},buyerName:\"John\",buyerSurname:\"Doe\",merchantInfo:\"\",merchantName:\"Sandbox Merchant Name - 60383\",cancelUrl:\"\",buyerProtectionEnabled:false,hide3DS:false,gsmNumber:\"\",email:\"email@email.com\",checkConsumerDetail:{},subscriptionPaymentEnabled:false,ucsEnabled:false,fingerprintEnabled:false,payWithIyzicoFirstTab:false,creditEnabled:false,payWithIyzicoLead:false,goBackUrl:\"\",metadata : {},createTag:function(){var iyziJSTag = document.createElement('script');iyziJSTag.setAttribute('src','https://sandbox-static.iyzipay.com/checkoutform/v2/bundle.js?v=1714445286139');document.head.appendChild(iyziJSTag);}};iyziInit.createTag();}</script>",
#     tokenExpireTime: 1800,
#     paymentPageUrl: "https://sandbox-cpp.iyzipay.com?token=<GENERATED_TOKEN>&lang=tr"
#   }
# }
# Script complete!
```

#### Tests

```bash
# FROM: ./

pnpm test;
```

## Building

```bash
# FROM: ./

pnpm build;

# [Expected Output]:
# ...
```