import { createApp } from 'vue'
import App from './App.vue'


import { router, setupRouter } from '@/router';


// CSS base style sheet
import '@/assets/styles/normalize.css';
import 'uno.css';
import 'animate.css';
import '@/assets/styles/hover.css';
import './style.css'




const app = createApp(App);




// Configure routing
// 配置路由
setupRouter(app);


// 移动端触摸 
setupTouch(app);



import '@/utils/index'
import { setupTouch } from './directives/hammerjs';





app.mount('#app')
