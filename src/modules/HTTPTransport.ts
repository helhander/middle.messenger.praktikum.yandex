/* eslint-disable no-unused-vars */
import { RequestOptions } from './HTTPTransport.types';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

function queryStringify(data: Record<string, any>): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  return Object.keys(data) ? `?${Object.keys(data).map((k) => `${k}=${data[k]}`).join('&')}` : '';
}

class HTTPTransport {
  get = (url: string, options: RequestOptions = {}) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  post = (url: string, options: RequestOptions = {}) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put = (url: string, options: RequestOptions = {}) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  // eslint-disable-next-line max-len
  delete = (url: string, options: RequestOptions = {}) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: RequestOptions = {}, timeout: number = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data as object)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = (): void => {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

export default HTTPTransport;
