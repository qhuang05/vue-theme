<template>
  <div id="app">
    <select v-model="theme" @change="changeTheme">
      <option value="default">蓝色</option>
      <option value="red">红色</option>
    </select>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      theme: 'default',
    }
  },
  methods: {
    changeTheme() {
      document.documentElement.setAttribute('theme', this.theme);
    }
  },
  mounted() {
    this.changeTheme();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  margin-top: 60px;
}
</style>
