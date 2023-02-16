<template>
  <v-toolbar class="mt-12 pt-4">
    <v-tabs v-model="tab" align-tabs="center" grow>
      <v-tab v-for="({title, value}) in items" :to="value" :value="value" :key="value">
        {{ title }}
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      tab: "one"
    }
  },
  computed: {
    items() {
      return [
        {
          title: "One",
          value: "one",
        },
        {
          title: "Two",
          value: "two"
        },
        {
          title: "Three",
          value: "three"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>