<template>
  <div id="app">
    <navbar
      :toggle-sidebar="toggleSidebar"
      :class="{'addBlur': showMenuSidebar || showTwitterSidebar}" />

    <menu-sidebar
      v-if="sidebarContent.content"
      :blok="sidebarContent.content"
      :toggle-sidebar="toggleSidebar"
      :show="showMenuSidebar"
      :class="{'addBlur': showTwitterSidebar}" />

    <main
      :class="{'addBlur': showMenuSidebar || showTwitterSidebar}"
      class="l-content">
      <home
        v-if="mainContent.content"
        :blok="mainContent.content" />
    </main>

    <twitter-sidebar
      :toggle-sidebar="toggleSidebar"
      :show="showTwitterSidebar" />
  </div>
</template>

<script>
import axios from 'axios'
import home from '@/views/Home'
import navbar from '@/components/navbar'
import menuSidebar from '@/components/menu-sidebar'
import twitterSidebar from '@/components/twitter-sidebar'

export default {
  name: 'Zenemig',
  components: {
    home,
    navbar,
    menuSidebar,
    twitterSidebar
  },
  data () {
    return {
      mainContent: {},
      sidebarContent: {},
      showMenuSidebar: false,
      showTwitterSidebar: false
    }
  },
  created () {
    window.storyblok.on('change', () => {
      this.getContent('draft')
    })
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getContent('draft')
      } else {
        this.getContent('published')
      }
    })
  },
  methods: {
    getContent (slug, version) {
      axios
        .all([this.getMainContent(slug, version), this.getSidebarContent(slug, version)])
        .then(axios.spread( (mainContent, sidebarContent) => {
          this.mainContent = mainContent.data.story
          this.sidebarContent = sidebarContent.data.story
        }))
        .catch( error => {
          console.log(error);
        })
    },
    getMainContent (slug, version) {
      return axios.get('https://api.storyblok.com/v1/cdn/stories/main-content?version=' + version + '&token=' + process.env.VUE_APP_STORYBLOK_ACCESS_TOKEN)
    },
    getSidebarContent (slug, version) {
      return axios.get('https://api.storyblok.com/v1/cdn/spaces/zenemig/stories/sidebar?version=' + version + '&token=' + process.env.VUE_APP_STORYBLOK_ACCESS_TOKEN)
    },
    toggleSidebar: (sidebar) => {
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
