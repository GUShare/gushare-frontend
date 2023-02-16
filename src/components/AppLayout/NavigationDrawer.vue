<template>
  <v-navigation-drawer temporary location="left" :model-value="modelValue" @update:modelValue="$emit('update:modelValue', $event)">
    <v-list>
      <v-list-item v-for="({title , value}) in items" :value="value" :to="value" :title="title" :key="value" @click="navigate(value)"/>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
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
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    navigate(to) {
      // Navigate logic
      this.$emit("update:modelValue", false);
    }
  }
}
</script>

<style scoped>

</style>