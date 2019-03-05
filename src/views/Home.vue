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
    <!--<section class="stats">
      <div class="viewport-wrapper">
        <div class="stats-inner">
          <h2 class="title">
            <span class="emphasize">Lenguajes</span>
            <br>
            con los que he trabajado los últimos 7 días
          </h2>
          <coding-language-cloud class="widget" :list="codingLanguageList"/>
        </div>
      </div>
    </section>-->
  </div>
</template>
<script>
/* global VERSION */
import CodingLanguageCloud from '../components/CodingLanguageCloud'

export default {
  name: 'home',
  components: {
    CodingLanguageCloud
  },
  computed: {
    codingLanguageList () {
      return this.$store.getters.codingLanguageList
    },
    appVersion () {
      return VERSION
    }
  },
  created () {
    this.$store.dispatch('retrieveCodingLanguageList')
  }
}
</script>

<style lang="scss" scoped>
  .homepage {
    height: 100%;

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
      padding-top: 200px;
      .stats-inner {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .title {
          width: 40%;
        }
        .widget {
          width: 60%;
        }
      }
      .title {
        color: white;
        margin: 0;
        font-weight: 300;
        font-family: 'Barlow', sans-serif;
        font-size: 70px;
        .emphasize {
          font-weight: normal;
          font-family: 'Barlow', sans-serif;
          text-transform: uppercase;
        }
      }
    }
  }
</style>
