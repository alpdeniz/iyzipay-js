// Imports
// =================================
import { headerAttributes } from "@/utils/constants";
import crypto from "crypto";

// Helper Functions
// =================================
/**
 * 
 * @param price 
 * @returns 
 */
export const formatPrice = (price: string | number) => {
  if (
    ("number" !== typeof price && "string" !== typeof price) ||
    (typeof price === "number" && !isFinite(price))
  ) {
    return price;
  }
  const resultPrice = parseFloat(price as string).toString();
  if (-1 === resultPrice.indexOf(".")) {
    return resultPrice + ".0";
  }
  return resultPrice;
};

/**
 * 
 * @param request 
 * @returns 
 */
export const generateRequestString = (request: { [key: string]: any }) => {
  const isArray = Array.isArray(request);
  let requestString = '[';
  for (let i in request) {
      const val = request[i];
      if (typeof val !== 'undefined' && typeof val !== 'function') {
          // Eliminate number keys of array elements
          if (!isArray) {
              requestString += i + '=';
          }
          if (typeof val === 'object') {
              requestString += generateRequestString(val);
          } else {
              requestString += val;
          }
          requestString += isArray ? ', ' : ',';
      }
  }
  requestString = requestString.slice(0, (isArray ? -2 : -1));
  requestString += ']';
  return requestString;
};

/**
 * 
 * @param apiKey 
 * @param randomString 
 * @param secretKey 
 * @param payloadObject 
 * @returns 
 */
const generateAuthorizationString = (
  apiKey: string,
  randomString: string,
  secretKey: string,
  payloadObject: { [key: string]: any }
) => {
  const requestString = generateRequestString(payloadObject);
  const hashSha1 = crypto.createHash('sha1');
  hashSha1.update(apiKey + randomString + secretKey + requestString, 'utf-8'); 
  return hashSha1.digest('base64');
};

/**
 * 
 * @param size 
 * @returns 
 */
const generateRandomString = (size: number) => {
  return process.hrtime()[0] + Math.random().toString(size).slice(2);
};

/**
 * 
 * @param apiKey 
 * @param secretKey 
 * @param payload 
 * @returns 
 */
export const generateHeaders = (apiKey: string, secretKey: string, payload: { [key: string]: any }) => {
  let headers: { [key: string]: any } = {};
  headers[headerAttributes.HEADER_NAME_CLIENT_VERSION] = headerAttributes.DEFAULT_CLIENT_VERSION;
  headers[headerAttributes.HEADER_NAME_RANDOM_STRING] = generateRandomString(headerAttributes.DEFAULT_RANDOM_STRING_SIZE);
  const genAuth = generateAuthorizationString(apiKey, headers[headerAttributes.HEADER_NAME_RANDOM_STRING], secretKey, payload);
  headers[headerAttributes.HEADER_NAME_AUTHORIZATION] = headerAttributes.HEADER_VALUE_AUTHORIZATION_PREFIX + ' ' + apiKey + headerAttributes.DEFAULT_SEPARATOR + genAuth;
  return headers;
};
