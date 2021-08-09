export interface RequestOptions {
  timeout?: number,
  headers?: Record<string, any>,
  method?: string,
  // eslint-disable-next-line no-undef
  data?: BodyInit | Document,
}
