<template>
  <base-simple-item>
    <base-simple-item-header
      :header-title="customer.name"
    >
      <template slot="header-actions">
        <v-btn icon>
          <v-icon>list</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>edit</v-icon>
        </v-btn>
      </template>
    </base-simple-item-header>
    <base-simple-item-body>
      <v-layout>
        <v-flex md4>
          <base-simple-item-body-infos
            :infos="infos"
          >
          </base-simple-item-body-infos>
        </v-flex>
        <v-flex md8>
          <base-simple-item-body-tabs>
            <v-tab
              href="#1"
            >
              订单列表
            </v-tab>
            <v-tab-item
              value="1"
            >
              <v-card flat>
                <v-card-text>
                  <v-chip small
                    v-for="(tabItem, tabItemIndex) in tabItems"
                    :key="`tab-item-${tabItemIndex}`"
                    :color="tabItem.color"
                  >
                    {{ tabItem.text }}
                  </v-chip>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </base-simple-item-body-tabs>
        </v-flex>
      </v-layout>
    </base-simple-item-body>
  </base-simple-item>
</template>

<script>
  import BaseSimpleItem from '~/components/BaseSimpleItem.vue'
  import BaseSimpleItemBody from '~/components/BaseSimpleItemBody.vue'
  import BaseSimpleItemBodyInfos from '~/components/BaseSimpleItemBodyInfos.vue'
  import BaseSimpleItemBodyTabs from '~/components/BaseSimpleItemBodyTabs.vue'
  import BaseSimpleItemHeader from '~/components/BaseSimpleItemHeader.vue'

  import { STATUS } from '~/const/global'
  export default {
    components: {
      BaseSimpleItem,
      BaseSimpleItemBody,
      BaseSimpleItemBodyInfos,
      BaseSimpleItemBodyTabs,
      BaseSimpleItemHeader
    },
    props: {
      customer: {
        default: null,
        type: Object
      }
    },
    computed: {
      infos: function() {
        return [{
          color: 'blue',
          icon: 'phone',
          content: this.customer.tel || '无'
        }, {
          color: 'blue',
          icon: 'location_on',
          content: this.customer.address || '无'
        }, {
          color: 'blue',
          icon: 'access_time',
          content: this.customer.prettyCreateTime
        }]
      },
      tabItems: function() {
        const orders = this.customer.orders.map(order => {
          return {
            color: STATUS[order.status].COLOR,
            text: order.id
          }
        })
        console.log(orders)
        return orders
      }
    }
  }
</script>
