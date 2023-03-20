import { onMounted, onUnmounted } from "vue";
// 监听页面变化
export function useResize(handler:(this: Window, ev: UIEvent) => any) {
    const start = () => {
      window.addEventListener('resize', handler);
    };
  
    const stop = () => {
      window.removeEventListener('resize', handler);
    };
    start()
    onUnmounted(() => {
      stop();
    });
    return {stop};
}