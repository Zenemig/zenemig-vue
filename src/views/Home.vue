<template>
  <section
      id="content"
      class="content">
      <h1 class="headline intro">
        Hola, soy Matías Giménez, con G de gato.
        <br><small>Padre de Amelia y Lucca, compañero de aventuras de <a href="http://alessandrazanocco.com">Alessandra Zanocco</a> y desarrollador Front-End</small>
      </h1>

      <div class="content-box">

        <article class="content-work-card">
          <div class="content-work-card-img escapararte">
            <div class="overlay-black-medium"/>
            <span class="">
              <font-awesome-icon :icon="['fab', 'html5']" />
            </span>
          </div>

          <ul class="content-work-card-detail">
            <li>UX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
          </ul>

          <h2 class="content-work-card-title">EscaparArte</h2>

          <p class="content-work-card-text">Maqueta para el sitio de <a href="http://escapararte.cl">EscaparArte</a>.</p>

          <div class="content-work-card-footer">
            <div class="employer">
              <a href="https://merca.cl"><font-awesome-icon :icon="['fal', 'briefcase']" />Merca</a>
            </div>

            <div class="project-url">
              <a href="http://www.clientes.zenemig.net/Merca/Escapararte/"><font-awesome-icon :icon="['fal', 'globe-americas']" />EscaparArte</a>
            </div>
          </div>
        </article>

        <article class="content-work-card">
          <div class="content-work-card-img resostenido">
            <div class="overlay-black-medium"/>
            <span class="fa fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x"/>
              <i class="fa fa-html5 fa-stack-1x"/>
            </span>
          </div>

          <ul class="content-work-card-detail">
            <li>UX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
          </ul>

          <h2 class="content-work-card-title">Resostenido</h2>

          <p class="content-work-card-text">Maqueta para el sitio de <a href="http://resostenido.cl">Resostenido</a>.</p>

          <div class="content-work-card-footer">
            <div class="employer">
              <a href="https://merca.cl"><i class="fa fa-briefcase"/>Merca</a>
            </div>

            <div class="project-url">
              <a href="http://www.clientes.zenemig.net/Merca/Resostenido/"><i class="fa fa-globe"/>Resostenido</a>
            </div>
          </div>
        </article>

        <article class="content-work-card">
          <div class="content-work-card-img zenemig">
            <div class="overlay-black-medium"/>
            <span class="fa fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x"/>
              <i class="fa fa-wordpress fa-stack-1x"/>
            </span>
          </div>

          <ul class="content-work-card-detail">
            <li>AI</li>
            <li>UX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>WP</li>
          </ul>

          <h2 class="content-work-card-title">Zenemig</h2>

          <p class="content-work-card-text">Portafolio y blog personal.</p>

          <div class="content-work-card-footer">
            <div class="employer">
              <a href="https://zenemig.net"><i class="fa fa-briefcase"/>Zenemig</a>
            </div>

            <div class="project-url">
              <a href="http://zenemig.net"><i class="fa fa-globe"/>Zenemig</a>
            </div>
          </div>
        </article>

        <article class="content-work-card">
          <div class="content-work-card-img manetch">
            <div class="overlay-black-medium"/>
            <span class="fa fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x"/>
              <i class="fa fa-html5 fa-stack-1x"/>
            </span>
          </div>

          <ul class="content-work-card-detail">
            <li>AI</li>
            <li>UX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
          </ul>

          <h2 class="content-work-card-title">Sitio de Eventos</h2>

          <p class="content-work-card-text">Plantilla sobre Ruby on Rails para los eventos de <a href="https://manetch.com">manetch</a>.</p>

          <div class="content-work-card-footer">
            <div class="employer">
              <a href="https://manetch.com"><i class="fa fa-briefcase"/>manetch</a>
            </div>

            <div class="project-url">
              <a href="https://manetch.com/events/wcdgt"><i class="fa fa-globe"/>WCDT</a>
            </div>
          </div>
        </article>

        <article class="content-work-card">
          <div class="content-work-card-img volviendo-a-la-tierra">
            <div class="overlay-black-medium"/>
            <span class="fa fa-stack fa-4x">
              <i class="fa fa-circle fa-stack-2x"/>
              <i class="fa fa-html5 fa-stack-1x"/>
            </span>
          </div>

          <ul class="content-work-card-detail">
            <li>AI</li>
            <li>UX</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
          </ul>

          <h2 class="content-work-card-title">Volviendo a la Tierra</h2>

          <p class="content-work-card-text">Página de caída estática hecha para la venta del libro <strong>Volviendo a la Tierra</strong>.</p>

          <div class="content-work-card-footer">
            <div class="employer">
              <a href="https://zenemig.net"><i class="fa fa-briefcase"/>Zenemig</a>
            </div>

            <div class="project-url">
              <a href="http://volviendoalatierra.cl"><i class="fa fa-globe"/>Volviendo a la Tierra</a>
            </div>
          </div>
        </article>
      </div>

      <div class="clearfix"/>
      <footer class="content-footer-mobile">
        Hecho con <i class="fa fa-heart"/> y <a href="http://wordpress.org"><i class="fa fa-wordpress"/></a>
      </footer>
    </section>
</template>

<script>
import navbar from '@/components/navbar'
import menuSidebar from '@/components/menu-sidebar'
import twitterSidebar from '@/components/twitter-sidebar'
import contactSidebar from '@/components/contact-sidebar'

export default {
  name: 'Home',
  components: {
    navbar,
    menuSidebar,
    twitterSidebar,
    contactSidebar
  },
  data: () => {
    return {
      showMenuSidebar: false,
      showTwitterSidebar: false,
      showContactSidebar: false
    }
  },
  methods: {
    toggleMenuSidebar: function () {
      this.showMenuSidebar = !this.showMenuSidebar
    },
    toggleTwitterSidebar: function () {
      this.showTwitterSidebar = !this.showTwitterSidebar
    },
    toggleContactSidebar: function () {
      this.showContactSidebar = !this.showContactSidebar
    }
  }
}
</script>
