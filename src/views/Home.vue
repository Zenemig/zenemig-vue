<template>
  <section
    class="v-home">
    <h1 class="c-headline">
      Hi, I'm Matías Giménez, from Chile
      <br><small>Father to Amelia ({{ age(26, 2, 2009) }}) and Lucca ({{ age(30, 12, 2015) }}), Front-End Developer and a very amateur photographer</small>
    </h1>

    <div class="c-portfolio">
      <project v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>

<script>

import project from '@/components/project'

const portfolio = [
  {
    icon: 'vuejs',
    image_class: 'zenemig',
    tags: ['UX', 'UI', 'HTML5', 'Sass', 'JS', 'Vue', 'Netlify'],
    title: 'Zenemig.net',
    description: 'Personal portfolio used as a demo to show my skills.',
    employer: {
      name: 'Zenemig',
      url: 'https://zenemig.net'
    },
    project: {
      name: 'Zenemig',
      url: 'https://github.com/zenemig'
    }
  },
  {
    icon: 'vuejs',
    image_class: 'leaflink',
    tags: ['HTML5', 'Sass', 'JS', 'Vue', 'Design System'],
    title: 'LeafLink',
    description: 'Worked on a migration from Django Templates to a modern JAM stack using VueJS as a UI library and Storybook as a Design System. I was assigned, as part of a multidisciplinary team, to work on the whole CRM logic, from arquitecture to UI development.',
    employer: {
      name: 'LeafLink',
      url: 'https://leaflink.com'
    },
    project: {
      name: 'Private',
      url: 'https://leaflink.com'
    }
  },
  {
    icon: 'vuejs',
    image_class: 'consorcio',
    tags: ['HTML5', 'CSS3', 'JS', 'Vue', 'Modyo'],
    title: 'Consorcio',
    description: 'Worked on a migration from very old technology to a modern stack using VueJS as a UI library and Modyo as a CMS. I was assigned, as part of a multidisciplinary team, to work on the public and private web apps, from arquitecture to UI development.',
    employer: {
      name: 'Modyo',
      url: 'https://modyo.com'
    },
    project: {
      name: 'Consorcio',
      url: 'https://consorcio.cl'
    }
  },
  {
    icon: 'vuejs',
    image_class: 'ubiome',
    tags: ['HTML5', 'CSS3', 'JS', 'Vue', 'Design System'],
    title: 'uBiome',
    description: 'Worked on a migration from Meteor to a modern JAM stack using VueJS as a UI library. I was assigned, as part of a multidisciplinary team, to work on the doctors app, from arquitecture to UI development. I was also part of a team of devs that pushed for having a Design System to support our 7 apps while maintaining consistancy and allowing us to share components across teams.',
    employer: {
      name: 'uBiome',
      url: 'https://ubiome.com'
    },
    project: {
      name: 'Private',
      url: 'https://ubiome.com'
    }
  },
  {
    icon: 'html5',
    image_class: 'manetch',
    tags: ['UX', 'UI', 'HTML5', 'CSS', 'jQuery'],
    title: 'Events Template',
    description: 'I was charged with designing and developing a template for multi-track events. The main challenge was getting the UX right considering n-tracks.',
    employer: {
      name: 'manetch',
      url: 'https://manetch.com'
    },
    project: {
      name: 'WCDT',
      url: 'https://www.manetch.com/events/wcdt+i19'
    }
  }
]

export default {
  name: 'Home',
  components: {
    project
  },
  data: () => {
    return {
      projects: portfolio
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
      return currentYear - yearBorn - 1
    }
  }
}
</script>
