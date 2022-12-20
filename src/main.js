import { createApp } from 'vue'
import App from './App.vue'
import BLoading from "./components/base/BLoading.vue";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//Tạo icon loading
const app = createApp(App);
app.component("BLoading", BLoading);
app.use(ElementPlus)
app.mount('#app')