import screenfull from "@/utils/screenfull.js"

// 双击全屏切换
// window.addEventListener("dblclick", () => {
//     //   console.log("dblclick");
//     const fullScreenElement = document.fullscreenElement;
//     console.log(fullScreenElement);
//     console.log(renderer.domElement);

//     if (fullScreenElement) {
//         renderer.domElement.requestFullscreen()
//     } else {
//         (renderer.domElement as any).exitFullScreen()
//     }

// });

export function useScreenFull(dom: Element = document as any,eventName:string) {
    // 全屏切换
    window.addEventListener(eventName, () => {
        //   console.log("dblclick");
        const fullScreenElement = document.fullscreenElement;
        console.log(fullScreenElement);
        console.log(dom);
        if (screenfull.isEnabled) {
            screenfull.toggle(dom);
        }
    });
}

