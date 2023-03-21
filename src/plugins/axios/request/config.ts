// 根据 import.meta.env.NODE_ENV 区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

let BASE_URL = '';
const TIME_OUT = 10000;
if (import.meta.env.NODE_ENV === 'development') {
  BASE_URL = '';
} else if (import.meta.env.NODE_ENV === 'production') {
  BASE_URL = '';
} else {
  BASE_URL = '';
}
// 默认是否显示loading
const DEAFULT_LOADING = true;

export { BASE_URL, TIME_OUT, DEAFULT_LOADING };
