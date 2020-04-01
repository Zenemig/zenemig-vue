<template>
  <article class="c-project">
    <div class="c-project__tags">
      <font-awesome-icon :icon="['fal', 'tags']" class="icon" /> {{ project.tags }}
    </div>

    <div class="c-project__img" :class="project.client_name.toLowerCase()">
      <div class="h-overlay-black-medium" />
      <div class="c-project__icon">
        <font-awesome-icon :icon="['fab', project.main_tech]" />
      </div>
    </div>

    <div class="c-project__footer">
      <div class="employer">
        <font-awesome-icon :icon="['fal', 'briefcase']" class="icon" /> {{ translateText('client') }}:
        <a :href="project.client_url.url">
          {{ project.client_name }}
        </a>
      </div>

      <div class="project-url">
        <font-awesome-icon :icon="['fal', 'globe-americas']" class="icon" />
        <a :href="project.project_url.url">
          {{ translateText('visitTheProject') }}
        </a>
      </div>
    </div>

    <h2 class="c-project__title">
      {{ project.title }}
    </h2>

    <p v-html="getDescription(project.description.content[0].content)" class="c-project__description" />
  </article>
</template>

<script>
export default {
  name: 'project',
  props: {
    locale: {
      types: String,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    translateText (textName) {
      return this.translations[textName][this.locale]
    },
    getDescription (array) {
      let html = ''
      array.forEach(item => {
        if (item.marks) {
          // TODO: Consider al types of rich text tags
          if (item.marks[0].type === 'bold') {
            html += `<strong>${item.text}</strong>`
          }
        } else {
          html += item.text
        }
      })
      return html
    }
  }
}
</script>
