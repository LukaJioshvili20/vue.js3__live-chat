<template>
  <div>
    <h1>This is Private Chat</h1>
    <TheChats/>
    <TheProfile/>
  </div>
</template>

<script>
import TheChats from "@/components/UI/TheChats";
import TheProfile from "@/components/UI/TheProfile";
export default {
  name: "PrivateChat",
  components: {
    TheProfile,
    TheChats
  }
}
</script>

<style lang="scss" scoped>

</style>