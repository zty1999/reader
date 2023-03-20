import { onUnmounted } from "vue";
// 页面事件监听
// this: Window, ev: Event
export function useEventListener(event:keyof WindowEventMap,listener:(ev:any) => any) {
    const start = () => {
      window.addEventListener(event, listener);
    };
  
    const stop = () => {
      window.removeEventListener(event, listener);
    };
    start()
    onUnmounted(() => {
      stop();
    });
    return {stop};
}