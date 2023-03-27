<template>
  <v-navigation-drawer
    temporary
    location="left"
    :model-value="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.path"
        :value="item.path"
        :to="item.path"
        :title="item.title"
        @click="close"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { routesToNavigate } from "@/router/routes";
export default {
  name: "NavigationDrawer",
  props: {
    modelValue: {
      default: false,
      type: Boolean
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {};
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
};
</script>

<style scoped></style>
