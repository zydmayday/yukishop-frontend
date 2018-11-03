import Api from '~/services/Api'

export const getOrders = () => {
  return Api().get('orders')
}

export const getOrder = id => {
  return Api().get(`orders/${id}`)
}

export const addOrder = newCustomer => {
  return Api().post('orders/add', newCustomer)
}

export const updateOrder = updatedCustomer => {
  return Api().put('orders/update', updatedCustomer)
}

export const deleteOrder = deletedCustomer => {
  return Api().delete(`orders/delete/${deletedCustomer.id}`)
}
