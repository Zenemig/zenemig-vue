<template>
  <aside
    class="l-sidebar l-sidebar--left c-menu-sidebar"
    :class="{'active': show}">
    <button class="l-sidebar__close" @click="toggleMenuSidebar">
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
      <a href="http://medium.com/@zenemig" class="social-icon medium">
        <font-awesome-icon :icon="['fab', 'medium']" />
      </a>
      <a href="http://linkedin.com/in/zenemig" class="social-icon linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </div>

    <div class="c-menu-sidebar__work">
      <h3 class="work__position">
        Desarrollador Front-End
      </h3>

      <a
        class="work__company"
        href="http://zenemig.net">
        Freelance
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

      <a href="skype:zenemig13?chat" class="contact__item">
        <div class="icon">
          <font-awesome-icon
            :icon="['fab', 'skype']" />
        </div>
        zenemig13
      </a>
    </div>

    <div class="c-menu-sidebar__footer">
      Hecho con <font-awesome-icon :icon="['fal', 'heart']" /> y <a href="https://vuejs.org/"><font-awesome-icon :icon="['fab', 'vuejs']" /></a>
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
    toggleMenuSidebar: {
      type: Function,
      required: true
    }
  }
}
</script>
