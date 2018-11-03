import { getProducts } from '~/services/ProductApi'
import { getField, updateField } from 'vuex-map-fields'
import _ from 'lodash'
import moment from 'moment'

moment.locale('zh-cn')

export const state = () => ({
  products: []
})

export const getters = {
  getField,
  prettyProducts: state => {
    return state.products.map(product => {
      return _.assign(product, {
        prettyCreateTime: moment(product.create_time).format('lll')
      })
    })
  }
}

export const mutations = {
  updateField,
  setProducts: (state, payload) => {
    state.products = payload.products
  }
}

export const actions = {
  initProducts: async ({ state, commit }) => {
    const res = await getProducts()
    commit('setProducts', { products: res.data })
  }
}
