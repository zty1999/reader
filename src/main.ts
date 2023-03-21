import { createApp } from 'vue'
import App from './App.vue'

import { setupStore } from '@/store';
import { router, setupRouter } from '@/router';
import { setupTouch } from './directives/hammerjs';
import '@/utils/index'

// CSS base style sheet
import '@/assets/styles/normalize.css';
import 'uno.css';
import 'animate.css';
import '@/assets/styles/hover.css';
import './style.css'



const app = createApp(App);


// Configure store
setupStore(app)

// Configure routing
// 配置路由
setupRouter(app);


// 移动端触摸 
setupTouch(app);









app.mount('#app')
