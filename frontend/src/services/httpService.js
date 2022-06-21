import axios from 'axios'
import { toast } from 'react-toastify'

axios.interceptors.response.use(null, (error) => {
  const errosEsperados =
    error.response && error.response.status >= 400 && error.status < 500

  if (!errosEsperados) {
    console.log('Erro', error)
    toast.error('Algo inexperado aconteceu')
  }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}