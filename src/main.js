import Vue from 'vue'
import App from './App.vue'
import StoryblokVue from 'storyblok-vue'
import translations from './mixins/translations'
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
Vue.use(StoryblokVue)

Vue.config.productionTip = false

Vue.mixin(translations)

new Vue({
  render: h => h(App)
}).$mount('#app')
