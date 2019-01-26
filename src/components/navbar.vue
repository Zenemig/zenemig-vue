<template>
  <nav id="nav-mobile">
    <img
      src="../assets/logo_zenemig.svg"
      class="nav-mobile-logo"
      alt="Zenemig Logo"
      title="Zenemig Logo">

    <font-awesome-icon
      :icon="['fab', 'twitter']"
      @click="toggleTwitterSidebar" />

    <font-awesome-icon
      class="nav-mobile-icn-menu"
      :icon="['fal', 'bars']"
      @click="toggleMenuSidebar" />
  </nav>
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
