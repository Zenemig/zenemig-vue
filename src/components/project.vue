<template>
  <article class="c-project">
    <div class="c-project__img" :class="project.image_class">
      <div class="h-overlay-black-medium" />
      <div class="c-project__icon">
        <font-awesome-icon :icon="['fab', project.icon]" />
      </div>
    </div>

    <div class="c-project__tags">
      <font-awesome-icon :icon="['fal', 'tags']" class="icon" /> {{ getTags(project.tags) }}
    </div>

    <h2 class="c-project__title">
      {{ project.title }}
    </h2>

    <p class="c-project__description">
      {{ project.description }}
    </p>

    <div class="c-project__footer">
      <div class="employer">
        <font-awesome-icon :icon="['fal', 'briefcase']" class="icon" /> Cliente:
        <a :href="project.employer.url">
          {{ project.employer.name }}
        </a>
      </div>

      <div class="project-url">
        <font-awesome-icon :icon="['fal', 'globe-americas']" class="icon" />
        <a :href="project.project.url">
          Visita el Proyecto
        </a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTags: function (arr) {
      return arr.join(' | ')
    }
  }
}
</script>
