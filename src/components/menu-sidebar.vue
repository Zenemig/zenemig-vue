<template>
  <aside
    v-editable="blok"
    class="l-sidebar l-sidebar--left c-menu-sidebar"
    :class="{'active': show}">
    <button class="l-sidebar__close" @click="toggleSidebar('menu')">
      <font-awesome-icon
        :icon="['fal', 'times-circle']"
      />
    </button>

    <img
      class="c-menu-sidebar__logo"
      :src="blok.zenemig_logo"
      alt="Zenemig Logo"
      title="Zenemig Logo">

    <div class="c-menu-sidebar__social">
      <a :href="blok.github_url.url" class="social-icon github">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a :href="blok.linkedin_url.url" class="social-icon linkedin">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a :href="blok.instagram_url.url" class="social-icon instagram">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
    </div>

    <div class="c-menu-sidebar__work">
      <h3 class="work__position">
        {{ blok.current_position }}
      </h3>

      <a
        class="work__company"
        :href="blok.company_url.url">
        {{ blok.company_name }}
      </a>
    </div>

    <div class="c-menu-sidebar__contact">
      <a :href="`tel:${blok.phone_number}`" class="contact__item">
        <div class="icon">
          <font-awesome-icon
            :icon="['fal', 'mobile']" />
        </div>
        {{ getFormatedNumber }}
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
    blok: {
      type: Object,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    },
    toggleSidebar: {
      type: Function,
      required: true
    }
  },
  computed: {
    getFormatedNumber () {
      const number = this.blok.phone_number
      const numberArr = number.split('')
      numberArr.splice(3, 0, ' ')
      numberArr.splice(5, 0, ' ')
      numberArr.splice(10, 0, ' ')
      return numberArr.join('')
    }
  }
}
</script>
