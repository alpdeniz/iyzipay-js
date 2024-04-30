export type DefaultRequest = {
  endpoint?: string;
  method?: string;
  headers?: Record<string, string>;
  body?: { [key: string]: any };
  signal?: AbortSignal | undefined;
};