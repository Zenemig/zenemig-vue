<template>
  <div id="app">
    <navbar :toggle-sidebar="toggleSidebar" />

    <menuSidebar :toggle-sidebar="toggleSidebar" :show="showMenuSidebar" />

    <main class="l-content">
      <router-view/>
    </main>

    <twitter-sidebar :toggle-sidebar="toggleSidebar" :show="showTwitterSidebar" />
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
    toggleSidebar: function (sidebar) {
      if (sidebar === 'menu') {
        this.showMenuSidebar = !this.showMenuSidebar
      } else if (sidebar === 'twitter') {
        this.showTwitterSidebar = !this.showTwitterSidebar
      }
    }
  }
}
</script>

<style lang="scss">
@import "styles/main";
</style>
