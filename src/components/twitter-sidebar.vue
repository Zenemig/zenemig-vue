<template>
  <aside
    class="l-sidebar l-sidebar--right c-twitter-sidebar"
    :class="{'active': show}">
    <button class="l-sidebar__close" @click="toggleSidebar('twitter')">
      <font-awesome-icon
        :icon="['fal', 'times-circle']"
      />
    </button>

    <button class="c-twitter-sidebar__toggle-button"  @click="toggleSidebar('twitter')">
      <font-awesome-icon v-if="!show" :icon="['fab', 'twitter']" />
      <font-awesome-icon v-else :icon="['fal', 'times']" />
    </button>

    <div class="c-twitter-sidebar__feed">
      <a class="twitter-timeline" href="https://twitter.com/zenemig?ref_src=twsrc%5Etfw">
        Tweets by zenemig
      </a>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'twitterSidebar',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    toggleSidebar: {
      type: Function,
      required: true
    }
  }
}
</script>
