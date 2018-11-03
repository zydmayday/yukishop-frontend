<template>
  <v-container
    ma-0
    pa-0
    elevation-5
  >
    <v-toolbar
      color="pink"
      dark
    >
      <v-toolbar-title>{{ customer.name }}</v-toolbar-title>
      <v-spacer/>
      <v-btn icon>
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>edit</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card>
      <v-layout>
        <v-flex md4>
          <v-list>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">phone</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{ customer.tel }}
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">location_on</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{ customer.address }}
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="indigo">access_time</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                {{ customer.prettyCreateTime }}
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
        <v-flex md8>
          <v-tabs
            color="grey lighten-1"
            dark
          >
            <v-tabs-slider color="yellow"/>
            <v-tab href="#customer-product-tab">
              订单列表
            </v-tab>
            <v-tab-item
              value="customer-product-tab"
            >
              <v-card flat>
                <v-card-text>
                  <v-chip
                    v-for="customerOrder in customer.orders"
                    :key="customerOrder.id"
                    :color="STATUS[customerOrder.status].COLOR"
                    small
                  >
                    {{ customerOrder.id }}
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import { STATUS } from '~/const/global'
export default {
  props: {
    customer: {
      default: null,
      type: Object
    }
  },
  data() {
    return {
      STATUS
    }
  }
}
</script>
