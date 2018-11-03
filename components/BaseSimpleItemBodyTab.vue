<template>
  <div>
    <v-tab
      :href="`#${tabHref}`"
    >
      {{ tabName }}
    </v-tab>
    <v-tab-item
      :value="tabHref"
    >
      <v-card flat>
        {{ tabItems }}
        <v-card-text>
          <v-chip small
            v-for="(tabItem, tabItemIndex) in tabItems"
            :key="`tab-item-${tabItemIndex}`"
            :color="tabItem.color"
          >
            {{ tabItem.text }}123
          </v-chip>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </div>
</template>

<script>
  export default {
    props: {
      tabHref: {
        default: '',
        type: String
      },
      tabName: {
        default: '',
        type: String
      },
      tabItems: {
        default: () => {
          return []
        },
        type: Array
      }
    }
  }
</script>