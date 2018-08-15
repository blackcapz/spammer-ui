import Vue from 'vue'
import {
  Input,
  Select,
  Card,
  Loading,
  Form,
  FormItem,
  Button,
  Option,
  Message,
  Tag
} from 'element-ui'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Card)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Option)
Vue.use(Tag)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;

new Vue({
  render: h => h(App)
}).$mount('#app')
