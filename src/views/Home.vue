<template>
  <div>
    <nav id="nav-mobile">
      <img
        src="../assets/logo_zenemig.svg"
        class="nav-mobile-logo"
        alt="Zenemig Logo"
        title="Zenemig Logo">
      <font-awesome-icon :icon="['fab', 'twitter']" @click="toggleTwitterSidebar" />
      <font-awesome-icon class="nav-mobile-icn-menu" :icon="['fal', 'bars']" @click="toggleMenuSidebar" />
    </nav>

    <button class="btn-twitter-feed">
      <font-awesome-icon :icon="['fab', 'twitter']" />
      <font-awesome-icon :icon="['fal', 'times-circle']" />
    </button>

    <aside
      id="sidebar-menu"
      class="sidebar left sidebar-menu"
      :class="{'active': showMenuSidebar}">
      <font-awesome-icon
        class="hidden-desktop"
        :icon="['fal', 'times-circle']"
         @click="toggleMenuSidebar" />

      <div class="sidebar-logo">
        <img
          src="../assets/logo_zenemig.svg"
          class="nav-mobile-logo"
          alt="Zenemig Logo"
          title="Zenemig Logo">
      </div>

      <div class="sidebar-social">
        <a href="http://github.com/zenemig">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="http://medium.com/@zenemig">
          <font-awesome-icon :icon="['fab', 'medium']" />
        </a>
        <a href="http://linkedin.com/in/zenemig">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </div>

      <div class="sidebar-work">
        <h3 class="sidebar-work-position">
          UI Engineer
        </h3>

        <a
          class="sidebar-work-company"
          href="http://ubiome.com">
          uBiome
        </a>
      </div>

      <div class="sidebar-blog">
        <h3 class="sidebar-blog-post">
          <a href="http://www.blog.zenemig.net/2014/11/21/a-veces-tus-palabras-suenan-mejor-dichas-por-otros/">
            A veces tus palabras suenan mejor dichas por otros
          </a>
        </h3>
        <a
          class="sidebar-blog-title"
          href="http://blog.zenemig.net">
          Zenblog
        </a>
      </div>

      <div class="sidebar-contact">
        <button class="btn btn-text btn-contacto" @click="toggleContactSidebar">Contáctame</button>
      </div>

      <div class="sidebar-footer">
        Hecho con <font-awesome-icon :icon="['fal', 'heart']" /> y <a href="https://vuejs.org/"><font-awesome-icon :icon="['fab', 'vuejs']" /></a>
      </div>
    </aside>

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

    <aside
      id="sidebar-twitter"
      class="sidebar right sidebar-twitter"
      :class="{'active': showTwitterSidebar}">
      <font-awesome-icon
        class="hidden-desktop"
        :icon="['fal', 'times-circle']"
        @click="toggleTwitterSidebar" />
      <h3 class="sidebar-twitter-title"><a href="http://twitter.com">@zenemig</a></h3>
      <div id="sidebar-twitter-feed">
        <a
          class="twitter-timeline"
          href="https://twitter.com/zenemig"
          data-widget-id="504771579041943553"
          width="320"
          data-chrome="noborders noheader nofooter">Tweets by @zenemig</a>
        <div class="tweet_footer"/>
      </div>
    </aside>

    <aside
      id="sidebar-contact"
      class="sidebar right sidebar-contact"
      :class="{'active': showContactSidebar}">
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
  </div>
</template>

<script>

export default {
  name: "Home",
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
