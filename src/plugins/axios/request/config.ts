// 1.方式一: 手动的切换不同的环境(不推荐)
// const BASE_URL = 'http://coderwhy.org/dev'
// const BASE_NAME = 'coderwhy'

// const BASE_URL = 'http://coderwhy.org/prod'
// const BASE_NAME = 'kobe'

// const BASE_URL = 'http://coderwhy.org/test'
// const BASE_NAME = 'james'

// 2.根据process.env.NODE_ENV区分
// 开发环境: development
// 生成环境: production
// 测试环境: test

let BASE_URL = '';
let PARSE_BASE_URL = '';// 使用 parse-server 的服务端地址
const TIME_OUT = 10000;
if (import.meta.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://123.207.32.32:8000/';
  PARSE_BASE_URL = 'http://106.55.30.242/parse';
} else if (import.meta.env.NODE_ENV === 'production') {
  // BASE_URL = 'http://coderwhy.org/prod';
  PARSE_BASE_URL = 'http://106.55.30.242/parse';

} else {
  // BASE_URL = 'http://coderwhy.org/test';
  PARSE_BASE_URL = 'http://106.55.30.242/parse';

}
// 默认是否显示loading
const DEAFULT_LOADING = true;

export { BASE_URL,PARSE_BASE_URL, TIME_OUT, DEAFULT_LOADING };
