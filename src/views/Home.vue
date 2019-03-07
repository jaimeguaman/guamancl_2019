<template>
  <div class="homepage">
    <section class="hero">
      <small class="ups">v{{appVersion}} - Casa de herrero, cuchillo de palo  </small>
      <div class="viewport-wrapper">
        <div class="hero-inner">
          <h1 class="title">Jaime Guamán</h1>
          <h2 class="subtitle">Desarrollador Web Front-End</h2>
        </div>
      </div>
    </section>
    <section class="stats">
      <div class="viewport-wrapper">
        <h2 class="heading">Tecnologías</h2>
        <div class="section-inner">
          <h3 class="title">
            con las que he estado trabajando durante los últimos 7 días<span title="Gracias Wakatime!">*</span>
          </h3>
          <coding-language-cloud class="widget" :list="codingLanguageList"/>
        </div>
      </div>
    </section>
    <section class="projects">
      <div class="viewport-wrapper">
        <h2 class="heading">Experiencia</h2>
        <div class="section-inner">
          <h3 class="title">
            algunos de los proyectos en los que he participado
          </h3>
          <project-list class="widget" :list="projectList"/>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="viewport-wrapper">
        <h2 class="heading">Contacto</h2>
        <div class="section-inner">
          <a href="https://www.linkedin.com/in/jaimeguaman/" target="_blank"><img svg-inline class="icon" src="../../public/img/icons/linkedin.svg" alt="Linkedin"/></a>
          <a href="https://github.com/jaimeguaman/" target="_blank"><img svg-inline class="icon" src="../../public/img/icons/github.svg" alt="Github"/></a>
          <a href="https://twitter.com/jaimeg90/" target="_blank"><img svg-inline class="icon" src="../../public/img/icons/twitter.svg" alt="Twitter"/></a>
          <a href="https://www.instagram.com/jaime.guaman.cl/" target="_blank"><img svg-inline class="icon" src="../../public/img/icons/instagram.svg" alt="Instagram"/></a>
        </div>
      </div>
    </section>
    <footer class="bye hero">
      <div class="viewport-wrapper">
        <div class="hero-inner">
          <h1 class="title">Jaime Guamán</h1>
          <h2 class="subtitle">Desarrollador Web Front-End</h2>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
/* global VERSION */
import CodingLanguageCloud from '../components/CodingLanguageCloud'
import ProjectList from '../components/ProjectList'

export default {
  name: 'home',
  components: {
    CodingLanguageCloud,
    ProjectList
  },
  computed: {
    codingLanguageList () {
      return this.$store.getters.codingLanguageList
    },
    projectList () {
      return this.$store.getters.projectList.slice().reverse()
    },
    appVersion () {
      return VERSION
    }
  },
  created () {
    this.$store.dispatch('retrieveCodingLanguageList')
    this.$store.dispatch('retrieveProjectList')
  }
}
</script>

<style lang="scss" scoped>
  $section-space: 150px;
  .homepage {
    height: 100%;
    overflow-y: auto;

    /* hero */
    .hero {
      color: $font-light-color;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-image: url('/img/background.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      .ups {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 100%;
        opacity: .2;
      }
      .hero-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .title,
      .subtitle {
        margin: 0;
        line-height: 1.1;
      }
      .title {
        font-size: 70px;
        text-align: center;
        will-change: font-size;
        transition: .2s ease font-size;

        @include for-size(tablet-portrait-up) {
          font-size: 100px;
          text-align: left;
        }

        @include for-size(tablet-landscape-up) {
          font-size: 100px;
          text-align: left;
        }

        @include for-size(desktop-up) {
          font-size: 150px;
        }
      }
      .subtitle {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-family: 'Barlow', sans-serif;
        position: relative;
        padding: 0 5%;
        font-size: 9px;
        text-align: center;
        will-change: font-size;
        transition: .2s ease font-size;

        @include for-size(tablet-portrait-up) {
          padding: 0 12%;
          font-size: 12px;
        }
        @include for-size(tablet-landscape-up) {
          font-size: 20px;
          padding: 0 8%;
          text-align: left;
        }
        @include for-size(desktop-up) {
          padding: 0 12%;
        }
        &:before,
        &:after {
          content: '';
          position: absolute;
          top: 50%;
          height: 1px;
          background-color: white;
          width: 5%;
          @include for-size(tablet-portrait-up) {
            width: 12%;
          }
          @include for-size(desktop-up) {
            width: 20%;
          }
        }
        &:before {
          left: 0;
        }
        &:after {
          right: 0;
        }
      }
    }

    /* stats */
    .stats {
      background-color: black;
      padding-top: $section-space;
    }

    /* projects */
    .projects {
      padding-top: $section-space;
    }

    /* contact */
    .contact {
      .section-inner {
        padding-top: 50px;
        padding-bottom: 100px;
      }
      a {
        width: 150px;
        height: 150px;
        padding: 20px;
        display: block;
        @include for-size(tablet-landscape-up) {
          margin-right: 100px;
          padding: 0;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .icon {
        width: 100%;
        height: 100%;
        path {
          fill: white
        }
      }
    }

    /* bye */
    .bye {
      background-image: url('/img/background-inverted.jpg') !important;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      height: 100%;
      .hero-inner {
        transform: rotate(180deg);
      }
    }

    .heading {
      font-weight: bold;
      font-family: 'Barlow', sans-serif;
      text-transform: uppercase;
      color: white;
      margin: 0;
      font-size: 40px;
      letter-spacing: -2px;
      line-height: 1;
      text-align: center;
      margin-bottom: 10px;
      @include for-size(desktop-up) {
        text-align: left;
        font-size: 70px;
      }
    }

    .section-inner {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      border-top: 1px solid rgba(white, .2);
      flex-direction: row;
      .title {
        color: white;
        margin: 0;
        font-weight: 300;
        font-family: 'Barlow', sans-serif;
        font-size: 30px;
        letter-spacing: -2px;
        line-height: 1;
        text-align: center;
        margin-bottom: 50px;
        @include for-size(desktop-up) {
          text-align: left;
          margin-bottom: 0;
          width: 40%;
          font-size: 60px;
        }
      }
      .widget {
        width: 100%;
        min-height: 200px;
        padding: 20px;
        @include for-size(desktop-up) {
          width: 60%;
        }
      }
    }
  }
</style>
