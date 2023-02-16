<template>
  <v-app>
    <NavigationDrawer
    class="hidden-md-and-up"
    />
    <NavigationBar class="hidden-sm-and-down" />

    <router-view></router-view>

    <TheFooter />
    <SnackBar />
  </v-app>
</template>

<script>

import NavigationDrawer from "@/components/AppLayout/NavigationDrawer";
import NavigationBar from "@/components/AppLayout/NavigationBar";
import TheFooter from "@/components/AppLayout/TheFooter";
import SnackBar from "@/components/AppLayout/SnackBar";
export default {
  name: 'App',

  components: {
    SnackBar,
    TheFooter,
    NavigationBar,
    NavigationDrawer
  },

  data: () => ({
    //
  }),
}
</script>
