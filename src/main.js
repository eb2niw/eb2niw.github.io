import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style.scss';
import VueScrollTo from 'vue-scrollto';
import BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import VueFeather from 'vue-feather'; 

// Create Vue app
const app = createApp(App);

// Use vue-scrollto plugin with options
app.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

// Use BootstrapVueNext
app.use(BootstrapVueNext);

// Register vue-feather globally
app.component(VueFeather.name, VueFeather);  

// Mount the app
app.mount('#app');
