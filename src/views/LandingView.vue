<template>
  <v-main>
    <v-container>
      <v-alert v-if="false"> Some ALERT!</v-alert>
      <router-view></router-view>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "LandingView"
}
</script>

<style scoped>

</style>