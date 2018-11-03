import { getOrders } from '~/services/OrderApi'
import { getField, updateField } from 'vuex-map-fields'
import _ from 'lodash'
import moment from 'moment'

moment.locale('zh-cn')

export const state = () => ({
  orders: []
})

export const getters = {
  getField,
  prettyOrders: state => {
    return state.orders.map(order => {
      return _.assign(order, {
        prettyCreateTime: moment(order.create_time).format('lll'),
        totalPrice: _.reduce(order.products, (sumPrice, price) => {
          return sumPrice + price
        }, 0),
        totalCount: order.products.length
      })
    })
  }
}

export const mutations = {
  updateField,
  setOrders: (state, payload) => {
    state.orders = payload.orders
  }
}

export const actions = {
  initOrders: async ({ state, commit }) => {
    const res = await getOrders()
    commit('setOrders', { orders: res.data })
  }
}
