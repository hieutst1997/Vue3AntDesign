import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from './App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import Antd from 'ant-design-vue';
import '@/assets/css/style.css';
import '@vuepic/vue-datepicker/dist/main.css';
import 'ant-design-vue/dist/reset.css';
const app = createApp(App)

app.use(router)
app.use(store)
app.use(Antd)
app.component('VueDatePicker', VueDatePicker);

router.isReady().then(() => app.mount('#app'))
