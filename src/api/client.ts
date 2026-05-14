import axios from 'axios'

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

client.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('taskflow_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message ?? error.message ?? 'Unknown error'
    const status  = error.response?.status ?? 0
    return Promise.reject({ message, status })
  }
)

export default client