<template>
  <v-tabs
    :color="tabsColor"
    dark
  >
    <v-tabs-slider
      :color="tabsSliderColor"
    />
    <slot></slot>
  </v-tabs>
</template>

<script>
export default {
  props: {
    tabsColor: {
      default: 'grey',
      type: String
    },
    tabsSliderColor: {
      default: 'yellow',
      type: String
    }
  }
}
</script>
