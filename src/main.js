import Vue from 'vue'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'; //默认element主题
import './theme/element-variables.scss'; //自定义element主题

// import './theme/blue/variable.scss';
import App from './App.vue'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
