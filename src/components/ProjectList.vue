<template>
  <ul class="project-list">
    <li class="project" v-for="(project,key) in list" :key="key">
      <a :href="project.url" target="_blank"><img :src="project.image"/></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProjectList',
  props: ['list']
}
</script>

<style scoped lang="scss">
  .project-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    .project {
      width: 100px;
      margin-right: 40px;
      margin-bottom: 50px;
      @include for-size(tablet-landscape-up) {
        margin-bottom: 30px;
        width: 170px;
      }
      img {
        width: 100%;
        display: block;
        max-width: 100%;
      }
    }
  }
</style>
