<template>
  <div id="app">
    <navbar
      :toggle-sidebar="toggleSidebar"
      :class="{'addBlur': showMenuSidebar || showTwitterSidebar}"
      @changeLocale="locale = $event" />

    <menu-sidebar
      v-if="sidebarReady"
      :locale="locale"
      :content="sidebarContent.content"
      :toggle-sidebar="toggleSidebar"
      :show="showMenuSidebar"
      :class="{'addBlur': showTwitterSidebar}"
      @changeLocale="locale = $event" />

    <menu-sidebar
      v-else
      :loading="true" />

    <main
      :class="{'addBlur': showMenuSidebar || showTwitterSidebar}"
      class="l-content">
      <home
        v-if="mainReady && projectsReady"
        :locale="locale"
        :content="mainContent.content"
        :projects="projects" />

      <home
        v-else
        :loading="true" />
    </main>

    <twitter-sidebar
      :toggle-sidebar="toggleSidebar"
      :show="showTwitterSidebar" />
  </div>
</template>

<script>
import storyblok from '@/api'
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
      locale: 'en',
      mainContent: {},
      mainReady: false,
      sidebarContent: {},
      sidebarReady: false,
      projects: [],
      projectsReady: false,
      showMenuSidebar: false,
      showTwitterSidebar: false
    }
  },
  watch: {
    locale () {
      this.getContentByType()
    }
  },
  created () {
    this.getContentByType()
  },
  methods: {
    getContentByType () {
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
    getContent (version) {
      this.getMainContent(version)
        .then(mainContent => {
          this.mainContent = mainContent.data.story
          this.mainReady = true
        })
        .catch(error => {
          console.log(error)
        })
      this.getSidebarContent(version)
        .then(sidebarContent => {
          this.sidebarContent = sidebarContent.data.story
          this.sidebarReady = true
        })
        .catch(error => {
          console.log(error)
        })
      this.getProjects(version)
        .then(projects => {
          this.projects = projects.data.stories
          this.projectsReady = true
        })
        .catch(error => {
          console.log(error)
        })
    },
    getMainContent (version) {
      if (this.locale !== 'en') {
        return storyblok.get(`${this.locale}/main-content?version=${version}`)
      }
      return storyblok.get(`/main-content?version=${version}`)
    },
    getSidebarContent (version) {
      if (this.locale !== 'en') {
        return storyblok.get(`${this.locale}/sidebar?version=${version}`)
      }
      return storyblok.get(`/sidebar?version=${version}`)
    },
    getProjects (version) {
      if (this.locale !== 'en') {
        return storyblok.get(`?starts_with=${this.locale}/projects/&sort_by=first_published_at:desc&version=${version}`)
      }
      return storyblok.get(`?starts_with=projects/&sort_by=first_published_at:desc&version=${version}`)
    },
    toggleSidebar (sidebar) {
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
