<template>
  <div class="whole-fucking-container">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <p class="dont-feed-the-bots">{{myEmail}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myEmail: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.$nextTick(() => {
        this.myEmail = 'jaime@guaman.cl'
      })
    }, 1500)
  }
}
</script>

<style lang="scss">
  @import "./styles/general";

  body {
    height: 100%;
    max-width: 100%;
    width: 100vw;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Barlow', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: $palette-primary-color;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Vidaloka', serif;
  }

  .emphasize {
    font-family: 'Vidaloka', serif;
  }

  .dont-feed-the-bots {
    color: rgba($font-light-color, .5);
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 10px;
    text-transform: uppercase;
    position: absolute;
    bottom: 0;
    z-index: 1;
  }

  .viewport-wrapper{
    @include for-size(phone-only) {
      width: 100%;
      padding-left: $view-padding-horizontal-mobile;
      padding-right: $view-padding-horizontal-mobile;
    }

    @include for-size(tablet-portrait-up) {
      width: 100%;
      padding-left: $view-padding-horizontal-tablet;
      padding-right: $view-padding-horizontal-tablet;
    }

    @include for-size(desktop-up) {
      max-width: $desktop-upper-boundary;
      margin: 0 auto;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .whole-fucking-container {
    height: 100%;
  }
</style>
