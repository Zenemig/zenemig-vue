import axios from 'axios'

const storyblok = axios.create({
  baseURL: 'https://api.storyblok.com/v1/cdn/stories/'
})

storyblok.interceptors.request.use((config) => {
  config.params = {token: process.env.VUE_APP_STORYBLOK_ACCESS_TOKEN}
  return config
}, error => {
  return Promise.reject(error)
})

export default storyblok
