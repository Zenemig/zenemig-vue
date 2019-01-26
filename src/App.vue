<template>
  <div id="app">
    <navbar :toggle-menu-sidebar="toggleMenuSidebar" :toggle-twitter-sidebar="toggleTwitterSidebar" />

    <button class="btn-twitter-feed"  @click="toggleTwitterSidebar">
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fal', 'times-circle']" />
    </button>

    <menuSidebar :toggle-menu-sidebar="toggleMenuSidebar" :toggle-contact-sidebar="toggleContactSidebar" :show="showMenuSidebar" />

    <router-view/>

    <twitter-sidebar :toggle-twitter-sidebar="toggleTwitterSidebar" :show="showTwitterSidebar" />

    <contact-sidebar :show="showContactSidebar" :toggle-contact-sidebar="toggleContactSidebar" />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import menuSidebar from '@/components/menu-sidebar'
import twitterSidebar from '@/components/twitter-sidebar'
import contactSidebar from '@/components/contact-sidebar'

export default {
  components: {
    navbar,
    menuSidebar,
    twitterSidebar,
    contactSidebar
  },
  data: () => {
    return {
      showMenuSidebar: false,
      showTwitterSidebar: false,
      showContactSidebar: false
    }
  },
  methods: {
    toggleMenuSidebar: function () {
      this.showMenuSidebar = !this.showMenuSidebar
    },
    toggleTwitterSidebar: function () {
      this.showTwitterSidebar = !this.showTwitterSidebar
    },
    toggleContactSidebar: function () {
      this.showContactSidebar = !this.showContactSidebar
    }
  }
}
</script>

<style lang="scss">
@import "styles/main";
</style>
