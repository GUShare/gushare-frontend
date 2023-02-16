<template>
  <v-toolbar class="mt-12 pt-4">
    <v-tabs v-model="tab" align-tabs="center" grow>
      <v-tab v-for="item in items" :to="item.path" :value="item.path" :key="item.path">
        {{ item.name }}
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
import {routesToNavigate} from "@/router/routes";

export default {
  name: "NavigationBar",
  data() {
    return {
      tab: "one"
    }
  },
  computed: {
    items() {
      return routesToNavigate;
    }
  }
}
</script>

<style scoped>

</style>