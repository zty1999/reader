import { App } from "vue"
import Hammer from "hammerjs"



export function setupTouch(app: App<Element>) {
  app.directive('tap', {
    /* ... */
    beforeMount(el, binding, vnode, prevVnode) {
      const hammer = new Hammer(el);
      hammer.on("tap", binding.value);
    }
  })
  app.directive('press', {
    /* ... */
    beforeMount(el, binding, vnode, prevVnode) {
      const hammer = new Hammer(el);
      hammer.on("press", binding.value);
    }
  })
}