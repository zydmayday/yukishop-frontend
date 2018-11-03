<template>
  <v-container>
    <v-layout>
      <v-flex
        md9
      >
        <v-card>
          <v-card-title>
            订单列表
            <v-spacer/>
            <v-text-field
              v-model="searchOrder"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            />
          </v-card-title>
          <v-data-iterator
            :items="prettyOrders"
            :search="searchOrder"
            content-tag="v-layout"
            row
            wrap
          >
            <v-flex
              slot="item"
              slot-scope="props"
              md12
            >
              <order-simple-item
                :order="props.item"
              />
            </v-flex>
          </v-data-iterator>
        </v-card>
      </v-flex>
      <v-flex
        md3
      />
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import OrderSimpleItem from '~/components/OrderSimpleItem'

export default {
  components: {
    OrderSimpleItem
  },
  data() {
    return {
      searchOrder: ''
    }
  },
  computed: {
    ...mapGetters('order', [`prettyOrders`])
  },
  mounted() {
    this.initOrders()
  },
  methods: {
    ...mapActions('order', ['initOrders'])
  }
}
</script>
