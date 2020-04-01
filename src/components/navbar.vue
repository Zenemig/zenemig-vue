<template>
  <div class="c-navbar">
    <img
      class="c-navbar__logo"
      src="../assets/logo_zenemig.svg"
      alt="Zenemig Logo"
      title="Zenemig Logo">

    <nav class="c-navbar__nav">
      <font-awesome-icon
        class="menu"
        :icon="['fal', 'id-badge']"
        @click="toggleSidebar('menu')" />

      <font-awesome-icon
        class="twitter"
        :icon="['fab', 'instagram']"
        @click="toggleSidebar('twitter')" />

      <div>
        <button @click="$emit('changeLocale', 'es')">Esp</button> |
        <button @click="$emit('changeLocale', 'en')">Eng</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    toggleSidebar: {
      type: Function,
      required: true
    }
  }
}
</script>
