import { createApp } from 'vue';
import { ElButton, ElInput } from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

import Spinner from './components/common/Spinner.vue';

const app = createApp(App);

app.component('ElButton', ElButton);
app.component('ElInput', ElInput);
app.component('Spinner', Spinner);

app.use(store);
app.use(router);
app.mount('#app');
