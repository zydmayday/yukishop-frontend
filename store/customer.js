import { getCustomers } from '~/services/CustomerApi'
import { getField, updateField } from 'vuex-map-fields'
import _ from 'lodash'
import moment from 'moment'

moment.locale('zh-cn')

export const state = () => ({
  customers: []
})

export const getters = {
  getField,
  prettyCustomers: state => {
    return state.customers.map(customer => {
      return _.assign(customer, {
        prettyCreateTime: moment(customer.create_time).format('lll')
      })
    })
  }
}

export const mutations = {
  updateField,
  setCustomers: (state, payload) => {
    state.customers = payload.customers
  }
}

export const actions = {
  initCustomers: async ({ state, commit }) => {
    const res = await getCustomers()
    commit('setCustomers', { customers: res.data })
  }
}
