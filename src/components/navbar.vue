<template>
  <div class="c-navbar">
    <img
      class="c-navbar__logo"
      src="../assets/logo_zenemig.svg"
      alt="Zenemig Logo"
      title="Zenemig Logo">

    <nav class="c-navbar__nav">
      <font-awesome-icon
        class="twitter"
        :icon="['fab', 'twitter']"
        @click="toggleTwitterSidebar" />

      <font-awesome-icon
        class="menu"
        :icon="['fal', 'bars']"
        @click="toggleMenuSidebar" />
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    toggleMenuSidebar: {
      type: Function,
      required: true
    },
    toggleTwitterSidebar: {
      type: Function,
      required: true
    }
  }
}
</script>
