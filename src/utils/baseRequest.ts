// Imports
// =================================
import { DefaultRequest } from "@/types/requests";
import { baseClient } from "@/client";
import { generateHeaders } from "./utils";

// Main Script
// =================================
export default async function (
  client: ReturnType<typeof baseClient>,
  {
    endpoint = "",
    method = "GET",
    headers = {},
    body = {},
    signal = undefined,
  }: DefaultRequest
): Promise<any> {
  try {
    const response = await fetch(`${client.uri}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...generateHeaders(client.apiKey, client.secretKey, body),
        ...headers,
      }, 
      body: !['GET'].includes(method) 
        ? JSON.stringify(body) 
        : undefined,
      signal,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();

    return json;
  } catch (error: any) {
    console.error({ error });
    return error;
  }
}
