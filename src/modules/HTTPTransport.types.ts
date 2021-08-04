export interface RequestOptions {
  timeout?: number,
  headers?: Record<string, any>,
  method?: string,
  data?: BodyInit | Document,
}