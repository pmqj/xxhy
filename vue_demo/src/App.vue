<template>
  <div id="app">
    <div id="box">
      <navigation></navigation>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  import navigation from './components/navigation.vue';
  export default {
    data() {
      return {}
    },
    methods: {},
    components: {
      navigation
    }
  }
</script>

<style lang="scss">
  #box {}

  div[name="nskd"] {
    width: 100%;
    height: 30px;
    background-color: $themeGreen;
  }
</style>
//