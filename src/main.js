import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { VIntersectionObserver } from "./directives/v-intersection-observer";

const app = createApp(App);

app.directive("observer", VIntersectionObserver);

app.mount('#app')
