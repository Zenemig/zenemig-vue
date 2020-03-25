<template>
  <aside
    class="l-sidebar l-sidebar--left c-menu-sidebar"
    :class="{'active': show}">
    <button class="l-sidebar__close" @click="toggleSidebar('menu')">
      <font-awesome-icon
        :icon="['fal', 'times-circle']"
      />
    </button>

    <img
      class="c-menu-sidebar__logo"
      src="@/assets/logo_zenemig.svg"
      alt="Zenemig Logo"
      title="Zenemig Logo">

    <div class="c-menu-sidebar__social">
      <a href="http://github.com/zenemig" class="social-icon github">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="http://linkedin.com/in/zenemig" class="social-icon linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="http://instagram.com/zenemig" class="social-icon instagram">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>

    <div class="c-menu-sidebar__work">
      <h3 class="work__position">
        Front-End Developer
      </h3>

      <a
        class="work__company"
        href="mailto:hola@zenemig.net">
        Available for Hire
      </a>
    </div>

    <div class="c-menu-sidebar__contact">
      <a href="tel:+56985006191" class="contact__item">
        <div class="icon">
          <font-awesome-icon
            :icon="['fal', 'mobile']" />
        </div>
        +56 9 8500 6191
      </a>

      <a href="mailto:hola@zenemig.net" class="contact__item">
        <div class="icon">
          <font-awesome-icon
            :icon="['fal', 'envelope']" />
        </div>
        hola@zenemig.net
      </a>
    </div>

    <div class="c-menu-sidebar__footer">
      Done with <font-awesome-icon :icon="['fal', 'heart']" /> and <a href="https://vuejs.org/"><font-awesome-icon :icon="['fab', 'vuejs']" /></a>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'menuSidebar',
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
