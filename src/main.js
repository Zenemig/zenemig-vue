import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faVuejs,
  faMedium,
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faSkype,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
  faHeart,
  faTimesCircle,
  faIdBadge,
  faBriefcase,
  faGlobeAmericas,
  faMobile,
  faEnvelope,
  faTimes,
  faTags
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faVuejs,
  faMedium,
  faGithub,
  faLinkedin,
  faTwitter,
  faHtml5,
  faSkype,
  faInstagram,
  faHeart,
  faTimesCircle,
  faIdBadge,
  faBriefcase,
  faGlobeAmericas,
  faMobile,
  faEnvelope,
  faTimes,
  faTags
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
