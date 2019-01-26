<template>
  <div id="app">
    <navbar :toggle-menu-sidebar="toggleMenuSidebar" :toggle-twitter-sidebar="toggleTwitterSidebar" />

    <menuSidebar :toggle-menu-sidebar="toggleMenuSidebar" :show="showMenuSidebar" />

    <router-view/>

    <twitter-sidebar :toggle-twitter-sidebar="toggleTwitterSidebar" :show="showTwitterSidebar" />
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import menuSidebar from '@/components/menu-sidebar'
import twitterSidebar from '@/components/twitter-sidebar'

export default {
  components: {
    navbar,
    menuSidebar,
    twitterSidebar
  },
  data: () => {
    return {
      showMenuSidebar: false,
      showTwitterSidebar: false
    }
  },
  methods: {
    toggleMenuSidebar: function () {
      this.showMenuSidebar = !this.showMenuSidebar
    },
    toggleTwitterSidebar: function () {
      this.showTwitterSidebar = !this.showTwitterSidebar
    }
  }
}
</script>

<style lang="scss">
@import "styles/main";
</style>
