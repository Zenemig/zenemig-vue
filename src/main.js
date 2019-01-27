import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faVuejs,
  faMedium,
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faSkype
} from '@fortawesome/free-brands-svg-icons'
import {
  faHeart,
  faTimesCircle,
  faBars,
  faBriefcase,
  faGlobeAmericas,
  faMobile,
  faEnvelope,
  faTimes,
  faTags
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faVuejs)
library.add(faMedium)
library.add(faGithub)
library.add(faLinkedin)
library.add(faTwitter)
library.add(faHtml5)
library.add(faSkype)
library.add(faHeart)
library.add(faTimesCircle)
library.add(faBars)
library.add(faBriefcase)
library.add(faGlobeAmericas)
library.add(faMobile)
library.add(faEnvelope)
library.add(faTimes)
library.add(faTags)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
