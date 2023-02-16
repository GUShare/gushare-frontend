<template>
  <v-app>
    <AppBar></AppBar>
    <NavigationBar class="hidden-sm-and-down" />
<!--    <router-view></router-view>-->
    <TheFooter />
    <SnackBar />
  </v-app>
</template>

<script>
import NavigationBar from "@/components/AppLayout/NavigationBar";
import TheFooter from "@/components/AppLayout/TheFooter";
import SnackBar from "@/components/AppLayout/SnackBar";
import AppBar from "@/components/AppLayout/AppBar";
export default {
  name: 'App',

  components: {
    AppBar,
    SnackBar,
    TheFooter,
    NavigationBar,
  },

  data() {
    return {
      drawer: false
    }
  },
}
</script>
