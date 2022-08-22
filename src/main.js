import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Container,Header,Main,Menu,MenuItem,Carousel,CarouselItem,Row,Col,Card,Image} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Image)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
