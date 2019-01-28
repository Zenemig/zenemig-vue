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

    <h3 class="sidebar-twitter-title"><a href="http://twitter.com">@zenemig</a></h3>
    <div id="sidebar-twitter-feed">
      <a
        class="twitter-timeline"
        href="https://twitter.com/zenemig"
        data-widget-id="504771579041943553"
        width="320"
        data-chrome="noborders noheader nofooter">Tweets by @zenemig</a>
      <div class="tweet_footer"/>
    </div>
  </aside>
</template>

<script>
// Twitter timeline
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
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
