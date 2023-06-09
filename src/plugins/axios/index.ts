// service统一出口
import SKRequest from './request';
import type { SKRequestConfig, Result } from './types';
import {BASE_URL} from './request/config'

function createAxios() {
  let reqConfig: SKRequestConfig = {};
  return new SKRequest({
    baseURL: BASE_URL,
    timeout: 10 * 1000, 
    showLoading: false,
    interceptors: {
      requestInterceptor: (config) => {
        reqConfig = config;
        console.log('单独请求成功的拦截', reqConfig);
        return config;
      },
      requestInterceptorCatch: (err) => {
        console.log('单独请求失败的拦截',err);
        return err;
      },
      responseInterceptor: (res: any) => {
        console.log('单独响应成功的拦截',res);
        let { config, data } = res;
        
        return res;
      },
      responseInterceptorCatch: (err) => {
        console.log('单独响应失败的拦截');
        // let timeoutMsg = httpErr(err);
        console.log(reqConfig);
        throw err;
        
      }
    }
  });
}
function createAuthAxios() {
  return new SKRequest({
    baseURL: BASE_URL,
    timeout: 10 * 1000,
    showLoading: false,
    interceptors: {
      requestInterceptor: (config) => {
        // // 携带token的拦截
        // const token = getToken() || '';
        // if (token) {
        //   config.headers!.Authorization = `Bearer ${token}`;
        // }

        // console.log('单独请求成功的拦截');
        return config;
      },
      requestInterceptorCatch: (err) => {
        console.log('单独请求失败的拦截');
        // const { requestOptions } = config;
        // if (requestOptions?.errorMessageMode === 'modal') {
        //   createErrorModal({ title:api.errorTip, content: timeoutMsg });
        // } else if (requestOptions?.errorMessageMode === 'message') {
        //   createMessage.error(timeoutMsg);
        // };
        return err;
      },
      responseInterceptor: (res) => {
        console.log('单独响应成功的拦截');
        return res;
      },
      responseInterceptorCatch: (err) => {
        console.log('单独响应失败的拦截');
        throw err;
      }
    }
  });
}

export const http = createAxios();
export const authHttp = createAuthAxios();


