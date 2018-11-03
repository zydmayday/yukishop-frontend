import Api from '~/services/Api'

export const getCustomers = () => {
  return Api().get('customers')
}

export const getCustomer = id => {
  return Api().get(`customers/${id}`)
}

export const addCustomer = newCustomer => {
  return Api().post('customers/add', newCustomer)
}

export const updateCustomer = updatedCustomer => {
  return Api().put('customers/update', updatedCustomer)
}

export const deleteCustomer = deletedCustomer => {
  return Api().delete(`customers/delete/${deletedCustomer.id}`)
}
