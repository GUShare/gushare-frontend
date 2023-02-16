<template>
  <v-footer class="bg-grey-darken-2" min-height="72" style="padding: unset">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        <v-chip class="ma-4" v-for="({title, value}) in items" :key="value" :to="value"> {{ title }}</v-chip>
      </v-col>
      <v-col class="text-center mt-4 bg-grey-lighten-1" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>

  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      items: [
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