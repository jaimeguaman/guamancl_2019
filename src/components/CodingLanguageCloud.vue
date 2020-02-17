<template>
  <div class="coding-language-cloud">
      <wordcloud
      :data="formattedItems"
      nameKey="name"
      valueKey="value"
      :color="colors"
      :showTooltip="false"
      :wordClick="wordClickHandler"
      :fontSize="[10, 60]"
      :margin="{top: 0, right: 0, bottom: 0, left: 0}">
      </wordcloud>
    <p class="notice">*Datos obtenidos gracias al trackeo en tiempo real de <a href="https://wakatime.com/@jaime" target="_blank">Wakatime</a></p>
  </div>
</template>

<script>
import Wordcloud from 'vue-wordcloud'

export default {
  name: 'CodingLanguageCloud',
  props: ['list'],
  components: {
    Wordcloud
  },
  computed: {
    colors () {
      return ['#fff']
    },
    formattedItems () {
      console.log(this.list)
      const items = this.list
        .filter(item => {
          return item.name !== 'Other'
        })
        .map(item => ({ name: item.name, value: item.percent }))

      console.log(items)
      return items
    }
  },
  methods: {
    wordClickHandler () {
      // noop
    },
    getCssClasses (language = {}) {
      let value = 0

      if (!language.percent || language.name.toLowerCase() === 'other') { return 'language language-no-size' }

      value = Math.ceil(language.percent) * 2

      if (value <= 20) {
        return 'language language-size-s'
      } else if (value > 20 && value <= 50) {
        return 'language language-size-m'
      } else if (value > 50) {
        return 'language language-size-l'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .coding-language-cloud {
    padding: 0;
    margin: 0;
    color: $font-light-color;
    display: flex;
    width: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    .language {
      background: rgba($palette-primary-color, .6);
      border-radius: 3px;
      margin: 5px 10px;

      &-size-s {
        font-size: 16px;
      }

      &-size-m {
        font-size: 26px;
      }

      &-size-l {
        font-size: 33px;
      }

      &-no-size {
        display: none;
      }

      .caption {
        padding: 5px 10px;
        margin: 0;
      }
    }
    .notice {
      font-style: italic;
      text-align: center;
      width: 100%;
      padding-top: 30px;
      opacity: .8;
      a {
        color: inherit;
        font-weight: bold;
        text-decoration: none;
      }

    }
  }

</style>
