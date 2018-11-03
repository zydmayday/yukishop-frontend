<template>
  <v-list>
    <v-list-tile
      v-for="(info, infoIndex) in infos"
      :key="`info-${infoIndex}`"
    >
      <v-list-tile-action>
        <v-icon
          :color="info.color"
        >{{ info.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        {{ info.content }}
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    infos: {
      default: () => {
        return []
      },
      type: Array
    }
  }
}
</script>
