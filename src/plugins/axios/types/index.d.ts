import type {
  Method,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios';

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined;
export interface SKRequestInterceptors<T = AxiosResponse>  {
  requestInterceptor?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (error: T) => T;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: T) => T;
}
export interface SKRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  showLoading?: boolean;
  interceptors?: SKRequestInterceptors<T>;
  // 请求错误后显示弹窗提示或重试等参数
  requestOptions?: RequestOptions;
}

export type RequestOptions = {
  accessToken?: string;
  // Error message prompt type
  errorMessageMode?: ErrorMessageMode;
};
// export interface CreateAxiosOptions extends AxiosRequestConfig {
//   authenticationScheme?: string;
//   transform?: AxiosTransform;
//   requestOptions?: RequestOptions;
// }
export type resultType = {
  accessToken?: string;
};
export interface Result<T = any> {
  code: number;
  type: 'success' | 'error' | 'warning';
  message: string;
  result: T;
}

export type RequestMethods = Extract<
  Method,
  'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'
>;

export interface SKHttpError extends AxiosError {
  isCancelRequest?: boolean;
}

export interface SKHttpResponse extends AxiosResponse {
  config: SKHttpRequestConfig;
}

export interface SKHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: SKHttpRequestConfig) => void;
  beforeResponseCallback?: (response: SKHttpResponse) => void;
}

export default class SKHttp {
  request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: SKHttpRequestConfig
  ): Promise<T>;
  post<T, P>(
    url: string,
    params?: T,
    config?: SKHttpRequestConfig
  ): Promise<P>;
  get<T, P>(
    url: string,
    params?: T,
    config?: SKHttpRequestConfig
  ): Promise<P>;
}



