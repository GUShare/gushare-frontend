<template>
  <div>
    <NavigationDrawer v-model="drawer"/>
    <v-app-bar color="blue">
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"/>
      <v-spacer></v-spacer>
      <p> Dummy User Name </p>
      <v-btn> Logout </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import NavigationDrawer from "@/components/AppLayout/NavigationDrawer";
export default {
  name: "AppBar",
  // eslint-disable-next-line vue/no-unused-components
  components: {NavigationDrawer},
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped>

</style>