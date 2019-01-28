<template>
  <section
    class="v-home">
    <h1 class="c-headline">
      Hola, soy Matías Giménez, con G de gato
      <br><small>Padre de Amelia y Lucca, compañero de aventuras de <a href="http://alessandrazanocco.com">Alessandra Zanocco</a> y desarrollador Front-End</small>
    </h1>

    <div class="c-portfolio">
      <project v-for="project in portfolio" :key="project.title" :project="project" />
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
  data: () => {
    return {
      portfolio: [
        {
          icon: 'vuejs',
          image_class: 'zenemig',
          tags: ['UX', 'UI', 'HTML5', 'Sass', 'JS', 'Vue', 'Netlify'],
          title: 'Zenemig',
          description: 'Portafolio personal.',
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
          icon: 'html5',
          image_class: 'manetch',
          tags: ['UX', 'UI', 'HTML5', 'CSS', 'jQuery'],
          title: 'Plantilla de Eventos',
          description: 'Plantilla sobre Ruby on Rails para los eventos de manetch.',
          employer: {
            name: 'manetch',
            url: 'https://manetch.com'
          },
          project: {
            name: 'WCDT',
            url: 'https://www.manetch.com/events/wcdt+i19'
          }
        },
        {
          icon: 'html5',
          image_class: 'escapararte',
          tags: ['UX', 'HTML5', 'Sass', 'jQuery'],
          title: 'EscaparArte',
          description: 'Maqueta para el sitio de EscaparArte.',
          employer: {
            name: 'Merca',
            url: 'https://merca.cl'
          },
          project: {
            name: 'EscaparArte',
            url: 'https://escapararte.netlify.com/'
          }
        },
        {
          icon: 'html5',
          image_class: 'resostenido',
          tags: ['UX', 'HTML5', 'Sass', 'jQuery'],
          title: 'Resostenido',
          description: 'Maqueta para el sitio de Resostenido.',
          employer: {
            name: 'Merca',
            url: 'https://merca.cl'
          },
          project: {
            name: 'Resostenido',
            url: 'https://resostenido.netlify.com/'
          }
        }
      ]
    }
  }
}
</script>
