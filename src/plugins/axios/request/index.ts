import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type {
  SKRequestConfig,
  SKRequestInterceptors,
  RequestOptions,
  Result
} from '../types';
// import { checkStatus } from '../checkStatus';
import { getErrorMsg } from '../utils'
import { DEAFULT_LOADING } from './config';
import { ElLoading } from 'element-plus';
import { LoadingInstance } from 'element-plus/es/components/loading/src/loading';
// import { getToken } from '@/utils/auth';

class SKRequest {
  private instance: AxiosInstance;
  private interceptors?: SKRequestInterceptors;
  private readonly config: SKRequestConfig;

  private showLoading?: boolean;
  loading?: LoadingInstance;
  constructor(config: SKRequestConfig) {
    // 保存请求参数
    this.config = config;
    // 创建axios实例
    this.instance = axios.create(config);

    // 保存基本信息
    this.showLoading = config.showLoading ?? DEAFULT_LOADING;
    // 保存基于 axios 实例进行拦截操作的实例拦截器
    this.interceptors = config.interceptors;

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    // 2.所有实例默认拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器: 请求成功拦截');
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          });
        }
        // 请求之前处理config
        // 性能优化-路由跳转的时候清空上一次页面的所有请求
        // config.cancelToken = new axios.CancelToken((cancel) => {
        //   window._axiosPromiseArr.push({
        //     cancel
        //   });
        // });
        // // 请求头添加用户token
        // const token = getToken();
        // // jwt token
        // if (token && config.headers) {
        //   // config.headers.Authorization = `Bearer ${token}`;
        //   config.headers.Authorization = `${token}`;
        // }
        return config;
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 请求失败拦截');
        message.error(getErrorMsg(err.response?.status))
        const { requestOptions } = config;
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res: any) => {
        console.log('所有的实例都有的拦截器: 响应成功拦截',res);
        // 将loading移除
        this.loading?.close();
        // 拦截响应的数据
        let { config, data } = res;
        console.log(res);
        // if (!data) {
        //   // return '[HTTP] Request has no return value';
        //   // throw new Error(t('sys.api.apiRequestFailed'));
        // }
        // if (data.code != 0) {
        //   // checkStatus(
        //   //   data?.code,
        //   //   data?.message,
        //   //   config?.requestOptions?.errorMessageMode
        //   // );
        // } else {
        //   message.success(data?.message);
        // }
        console.log(data);

        return res;
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 响应失败拦截',err);
        // 将loading移除 
        this.loading?.close();
        let response = err.response;
        // 判断不同的HttpErrorCode显示不同的错误信息
        // message.error(getErrorMsg(err.response?.status))
        message.error(getErrorMsg((response?.data?.code || response?.status )))
        // message.error(err.response?.data?.error)
        // message.error(err.message)
        
        const { requestOptions } = config;
        return response;
      }
    );
  }

  request<T = any>(
    config: SKRequestConfig,
    options?: RequestOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      config.requestOptions = options;
      console.log(config);
      this.instance
        .request<any, AxiosResponse<Result<T>>>(config)
        .then((res) => {
          console.log(res);
          // resolve(res.data.result as unknown as Promise<T>);
          resolve(res as unknown as Promise<T>);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config: SKRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'GET' }, options);
  }

  post<T = any>(config: SKRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'POST' }, options);
  }

  put<T = any>(config: SKRequestConfig, options?: RequestOptions): Promise<T> {
    return this.request({ ...config, method: 'PUT' }, options);
  }

  patch<T = any>(
    config: SKRequestConfig,
    options?: RequestOptions
  ): Promise<T> {
    return this.request({ ...config, method: 'PATCH' }, options);
  }

  delete<T = any>(
    config: SKRequestConfig,
    options?: RequestOptions
  ): Promise<T> {
    return this.request({ ...config, method: 'DELETE' }, options);
  }
}

export default SKRequest;
