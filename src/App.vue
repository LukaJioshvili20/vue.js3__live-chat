<template>
  <div>
    <TheNavigation/>
    <router-view/>
  </div>
</template>

<script>
import TheNavigation from "@/components/Layout/TheNavigation";
export default {
  name: "app",
  components: {
    TheNavigation,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>