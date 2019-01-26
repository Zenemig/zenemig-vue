<template>
  <aside
    id="sidebar-menu"
    class="sidebar left sidebar-menu"
    :class="{'active': show}">
    <font-awesome-icon
      class="hidden-desktop"
      :icon="['fal', 'times-circle']"
       @click="toggleMenuSidebar" />

    <div class="sidebar-logo">
      <img
        src="../assets/logo_zenemig.svg"
        class="nav-mobile-logo"
        alt="Zenemig Logo"
        title="Zenemig Logo">
    </div>

    <div class="sidebar-social">
      <a href="http://github.com/zenemig">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a href="http://medium.com/@zenemig">
        <font-awesome-icon :icon="['fab', 'medium']" />
      </a>
      <a href="http://linkedin.com/in/zenemig">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </div>

    <div class="sidebar-work">
      <h3 class="sidebar-work-position">
        UI Engineer
      </h3>

      <a
        class="sidebar-work-company"
        href="http://ubiome.com">
        uBiome
      </a>
    </div>

    <div class="sidebar-blog">
      <h3 class="sidebar-blog-post">
        <a href="http://www.blog.zenemig.net/2014/11/21/a-veces-tus-palabras-suenan-mejor-dichas-por-otros/">
          A veces tus palabras suenan mejor dichas por otros
        </a>
      </h3>
      <a
        class="sidebar-blog-title"
        href="http://blog.zenemig.net">
        Zenblog
      </a>
    </div>

    <div class="sidebar-contact">
      <button class="btn btn-text btn-contacto" @click="toggleContactSidebar">Contáctame</button>
    </div>

    <div class="sidebar-footer">
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
    },
    toggleContactSidebar: {
      type: Function,
      required: true
    }
  }
}
</script>
