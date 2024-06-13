import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style.scss';
import VueScrollTo from 'vue-scrollto';

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

// Mount the app
app.mount('#app');
