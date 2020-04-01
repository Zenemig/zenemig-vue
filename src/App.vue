<template>
  <div id="app">
    <navbar
      :toggle-sidebar="toggleSidebar"
      :class="{'addBlur': showMenuSidebar || showTwitterSidebar}" />

    <menu-sidebar
      v-if="sidebarContent.content"
      :content="sidebarContent.content"
      :toggle-sidebar="toggleSidebar"
      :show="showMenuSidebar"
      :class="{'addBlur': showTwitterSidebar}" />

    <main
      :class="{'addBlur': showMenuSidebar || showTwitterSidebar}"
      class="l-content">
      <home
        v-if="mainContent.content"
        :content="mainContent.content"
        :projects="projects" />
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
      projects: {},
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
    getContent (version) {
      axios
        .all([this.getMainContent(version), this.getSidebarContent(version), this.getProjects(version)])
        .then(axios.spread( (mainContent, sidebarContent, projects) => {
          this.mainContent = mainContent.data.story
          this.sidebarContent = sidebarContent.data.story
          this.projects = projects.data.stories
        }))
        .catch( error => {
          console.log(error);
        })
    },
    getMainContent (version) {
      return axios.get('https://api.storyblok.com/v1/cdn/stories/main-content?version=' + version + '&token=' + process.env.VUE_APP_STORYBLOK_ACCESS_TOKEN)
    },
    getSidebarContent (version) {
      return axios.get('https://api.storyblok.com/v1/cdn/stories/sidebar?version=' + version + '&token=' + process.env.VUE_APP_STORYBLOK_ACCESS_TOKEN)
    },
    getProjects (version) {
      return axios.get(`https://api.storyblok.com/v1/cdn/stories?starts_with=projects/&sort_by=first_published_at:desc&version=${version}&token=${process.env.VUE_APP_STORYBLOK_ACCESS_TOKEN}`)
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
