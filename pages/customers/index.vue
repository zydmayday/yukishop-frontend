<template>
  <v-container>
    <v-layout>
      <v-flex
        md9
      >
        <v-card>
          <v-card-title>
            客户列表
            <v-spacer/>
            <v-text-field
              v-model="searchCustomer"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            />
          </v-card-title>
          <v-data-iterator
            :items="prettyCustomers"
            :search="searchCustomer"
            content-tag="v-layout"
            row
            wrap
          >
            <v-flex
              slot="item"
              slot-scope="props"
              md12
            >
              <customer-simple-item
                :customer="props.item"
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

import CustomerItem from '~/components/CustomerItem'
import CustomerSimpleItem from '~/components/CustomerSimpleItem'

export default {
  components: {
    CustomerItem,
    CustomerSimpleItem
  },
  data() {
    return {
      searchCustomer: ''
    }
  },
  computed: {
    ...mapGetters('customer', [`prettyCustomers`])
  },
  mounted() {
    this.initCustomers()
  },
  methods: {
    ...mapActions('customer', ['initCustomers'])
  }
}
</script>
