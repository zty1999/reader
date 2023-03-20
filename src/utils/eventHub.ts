import Mitt from "mitt";

/**
 * mitt
 * 适用场景：兄弟组件/隔代组件之间的通信
 * Vue 3 移除了 $on 、 $off 和 $once 这几个事件 API ，应用实例不再实现事件触发接口。
 * 根据官方文档在 迁移策略 - 事件 API 的推荐，我们可以使用实现事件发射器接口的外部库替换事件总线模式。例如：mitt 或者 tiny-emitter 
 * 
 */

type Events = {
  eventToggle: number;
  spriteClick:{ event: any, i:number }
};
// const emitter = mitt<Events>(); // inferred as Emitter<Events>

// emitter.on('foo', (e) => {}); // 'e' has inferred type 'string'

// emitter.emit('foo', 42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'. (2345)
const eventHub = Mitt<Events>();

export default eventHub;



// mitt 源码
// module.exports = function (n) {
//   return {
//     all: (n = n || new Map()),
//     on: function (e, t) {
//       var i = n.get(e)
//       i ? i.push(t) : n.set(e, [t])
//     },
//     off: function (e, t) {
//       var i = n.get(e)
//       i && (t ? i.splice(i.indexOf(t) >>> 0, 1) : n.set(e, []))
//     },
//     emit: function (e, t) {
//       var i = n.get(e)
//       i &&
//         i.slice().map(function (n) {
//           n(t)
//         }),
//         (i = n.get('*')) &&
//           i.slice().map(function (n) {
//             n(e, t)
//           })
//     },
//   }
// }