<template>
  <aside
    id="sidebar-contact"
    class="sidebar right sidebar-contact"
    :class="{'active': show}">
    <font-awesome-icon
      class="hidden-desktop"
      :icon="['fal', 'times-circle']"
      @click="toggleContactSidebar" />

    <ul class="fa-ul">
      <li>
        <a href="tel:+56985006191">
          <i class="fa fa-li fa-mobile"/> +56 9 85006191
        </a>
      </li>

      <li>
        <a href="mailto:hola@zenemig.net">
          <i class="fa fa-li fa-envelope"/> hola@zenemig.net
        </a>
      </li>

      <li>
        <a href="http://twitter.com/zenemig">
          <i class="fa fa-li fa-twitter"/> @zenemig
        </a>
      </li>

      <li>
        <i class="fa fa-li fa-telegram"/> +56 9 85006191
      </li>

      <li>
        <i class="fa fa-li fa-skype"/> zenemig13
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'contactSidebar',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    toggleContactSidebar: {
      type: Function,
      required: true
    }
  }
}
</script>
