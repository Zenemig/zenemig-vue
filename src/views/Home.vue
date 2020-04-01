<template>
  <section
    class="v-home"
    v-editable="content">
    <h1 class="c-headline">
      {{ content.title }}
      <br><small>{{ getDescriptionWithAges }}</small>
    </h1>

    <div class="c-portfolio">
      <project
        v-for="project in projects"
        :key="project.title" :project="project.content"
        :locale="locale"/>
    </div>
  </section>
</template>

<script>
import project from '@/components/project'

export default {
  name: 'Home',
  components: {
    project
  },
  props: {
    locale: {
      types: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    },
    projects: {
      type: Array,
      required: true
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
