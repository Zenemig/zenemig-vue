<template>
  <div>
    <section  v-if="loading">
      <h1 class="c-headline c-headline--loading">
        <div class="title" />
        <div class="description" />
      </h1>

      <div class="c-portfolio">
        <project
          v-for="index in 5"
          :key="index"
          :loading="true"/>
      </div>
    </section>

    <section  v-else>
      <h1 v-editable="content" class="c-headline">
        {{ content.title }}
        <small>{{ getDescriptionWithAges }}</small>
      </h1>

      <div class="c-portfolio">
        <project
          v-for="project in projects"
          :key="project.title" :project="project.content"
          :locale="locale"/>
      </div>
    </section>
  </div>
</template>

<script>
import project from '@/components/project'

export default {
  name: 'Home',
  components: {
    project
  },
  props: {
    loading: {
      type: Boolean
    },
    locale: {
      type: String
    },
    content: {
      type: Object
    },
    projects: {
      type: Array
    }
  },
  computed: {
    getDescriptionWithAges () {
      const array = this.content.description.split(' ')
      const formatedArray = array.map(word => {
        if (word === 'Amelia') {
          word = `Amelia (${this.age(26, 2, 2009)})`
        }
        if (word === 'Lucca,') {
          word = `Lucca (${this.age(30, 12, 2015)}),`
        }
        return word
      })
      return formatedArray.join(' ')
    }
  },
  methods: {
    age (dayBorn, monthBorn, yearBorn) {
      const date = new Date()
      const currentYear = date.getFullYear()
      const currentMonth = date.getMonth()
      const currentDay = date.getDate()

      if (currentMonth - monthBorn < 0) {
        return currentYear - yearBorn - 1
      }
      if (currentMonth === monthBorn && currentDay - dayBorn < 0) {
        return currentYear - yearBorn
      }
      return currentYear - yearBorn
    }
  }
}
</script>
