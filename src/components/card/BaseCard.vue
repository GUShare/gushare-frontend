<template>
  <v-card min-height="800" max-width="500" color="orange">
    <v-toolbar>
      <v-toolbar-title> Example Content - {{ title }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text> Lore Impsum ... you know it. </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "BaseCard",
  props: {
    title: {
      required: false,
      default: "",
      type: String
    }
  }
};
</script>

<style scoped></style>
