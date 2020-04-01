<template>
  <div>
    <aside
      v-if="loading"
      class="l-sidebar l-sidebar--left c-menu-sidebar c-menu-sidebar--loading">
      <div class="c-menu-sidebar__logo" />

      <div class="c-menu-sidebar__social">
        <div class="icon" />
        <div class="icon" />
        <div class="icon" />
      </div>

      <div class="c-menu-sidebar__work">
        <h3 class="work__position" />
        <div class="work__company" />
      </div>

      <div class="c-menu-sidebar__contact">
        <div class="item" />
        <div class="item" />
      </div>

      <footer class="c-menu-sidebar__footer">
        <div class="item" />
        <div class="item" />
      </footer>
    </aside>

    <aside
      v-else
      v-editable="content"
      class="l-sidebar l-sidebar--left c-menu-sidebar"
      :class="{'active': show}">
      <button class="l-sidebar__close" @click="toggleSidebar('menu')">
        <font-awesome-icon
          :icon="['fal', 'times-circle']"
        />
      </button>

      <img
        class="c-menu-sidebar__logo"
        :src="content.zenemig_logo"
        alt="Zenemig Logo"
        title="Zenemig Logo">

      <div class="c-menu-sidebar__social">
        <a :href="content.github_url.url" class="social-icon github">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a :href="content.linkedin_url.url" class="social-icon linkedin">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a :href="content.instagram_url.url" class="social-icon instagram">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </div>

      <div class="c-menu-sidebar__work">
        <h3 class="work__position">
          {{ content.current_position }}
        </h3>

        <a
          class="work__company"
          :href="content.company_url.url">
          {{ content.company_name }}
        </a>
      </div>

      <div class="c-menu-sidebar__contact">
        <a :href="`tel:${content.phone_number}`" class="contact__item">
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

      <footer class="c-menu-sidebar__footer">
        <div v-if="locale === 'es'">
          Hecho con <font-awesome-icon :icon="['fal', 'heart']" /> y <a href="https://vuejs.org/"><font-awesome-icon :icon="['fab', 'vuejs']" /></a>
        </div>
        <div v-else>
          Done with <font-awesome-icon :icon="['fal', 'heart']" /> and <a href="https://vuejs.org/"><font-awesome-icon :icon="['fab', 'vuejs']" /></a>
        </div>

        <div>
          <button @click="$emit('changeLocale', 'es')">Esp</button> | <button @click="$emit('changeLocale', 'en')">Eng</button>
        </div>
      </footer>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'menuSidebar',
  props: {
    loading: {
      types: Boolean
    },
    locale: {
      types: String
    },
    content: {
      type: Object
    },
    show: {
      type: Boolean
    },
    toggleSidebar: {
      type: Function
    }
  },
  computed: {
    getFormatedNumber () {
      const number = this.content.phone_number
      const numberArr = number.split('')
      numberArr.splice(3, 0, ' ')
      numberArr.splice(5, 0, ' ')
      numberArr.splice(10, 0, ' ')
      return numberArr.join('')
    }
  },
}
</script>
