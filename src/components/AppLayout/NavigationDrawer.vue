<template>
  <v-navigation-drawer temporary location="left" :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <v-list>
      <v-list-item v-for="item in items" :value="item.path" :to="item.path" :title="item.title" :key="item.path" @click="close"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {routesToNavigate} from "@/router/routes";

export default {
  props: {
    modelValue: {
      default: false,
      type: Boolean
    }
  },
  emits: ['update:modelValue'],
  name: "NavigationDrawer",
  data() {
    return {}
  },
  computed: {
    items() {
      return routesToNavigate;
    }
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    }
  }
}
</script>

<style scoped>

</style>