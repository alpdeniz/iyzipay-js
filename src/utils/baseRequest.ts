// Imports
// =================================
import { DefaultRequest } from "@/types/requests";
import createClient from "@/client";
import { generateHeaders } from "./utils";

// Main Script
// =================================
export default async function (
  client: ReturnType<typeof createClient>,
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
      body: !['DELETE', 'GET'].includes(method) 
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
