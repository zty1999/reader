// 请求错误 状态码 => message
export function getErrorMsg(code: number): string {
  switch (code) {
    case 200:
      return "成功";
    case 101:
      return "用户名或密码错误";
    case 403:
      return "没有权限";
    case 404:
      return "Not Found";
    // case undefined:
    //   return "网络错误";
    default:
      return String(code);
  }
}