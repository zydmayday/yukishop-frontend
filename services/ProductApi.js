import Api from '~/services/Api'

export const getProducts = () => {
  return Api().get('products')
}
