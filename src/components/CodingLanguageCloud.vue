<template>
  <ul class="coding-language-cloud">
    <li v-for="(language, index) in list" :key="index" :class="getCssClasses(language)">{{language.name}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CodingLanguageCloud',
  props: ['list'],
  methods: {
    getCssClasses (language = {}) {
      let value = 0

      if (!language.percent) { return 'language language-no-size' }

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
    list-style: none;
    padding: 0;
    margin: 0;
    color: $font-light-color;
    display: flex;
    width: 100%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    .language {
      padding: 5px 20px;
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
    }
  }

</style>
