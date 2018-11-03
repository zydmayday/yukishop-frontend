<template>
  <v-toolbar
    :color="headerColor"
    dark
  >
    <v-toolbar-title>{{ headerTitle }}</v-toolbar-title>
    <v-spacer/>
    <slot name="header-actions"></slot>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    headerColor: {
      default: 'pink',
      type: String
    },
    headerTitle: {
      default: 'this is a toobar title',
      type: String
    }
  }
}
</script>
