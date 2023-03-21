interface Arraywise {
  [key:number | string]:any;
  length: number;
}
// 深拷贝
export function cloneDeep<T extends Arraywise>(origin:T):T{
  let clone:T;
  if(typeof origin != 'object' ){
    clone = origin
    return clone;
  }
  
  let originType = myTypeOf(origin)
  if(originType == 'array'){
    clone = [] as unknown as T;
    for (let index = 0; index < origin.length; index++) {
      const element = origin[index];
      if(typeof element != 'object' ){
        clone[index] = element
      }else {
        clone[index] = cloneDeep(element)
      }
    }
  }else {
    clone = {} as T;
    for (const key in origin) {
      if (Object.prototype.hasOwnProperty.call(origin, key)) {
        const element = origin[key];
        if(typeof element != 'object' ){
          clone[key] = element
        }else {
          clone[key] = cloneDeep(element)
        }
      }
    }
  }

 

  return clone;
}


function myTypeOf<T>(p:T):string | undefined{
  var objectMap:{[key:string]:string} = {
      '[object Object]':'object',
      '[object Array]':'array',
      '[object Number]':'object-number',
      '[object String]':'object-string',
      '[object Boolean]':'object-boolean',
  }
  switch (typeof p) {
    case 'object':
    return objectMap[Object.prototype.toString.call(p)]
      break;
      case 'undefined':
      return undefined;
    default:
      return typeof p;
  }
}

