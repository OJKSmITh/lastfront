import axios from 'axios'
import config from './config'

const request = axios.create({
  baseURL: `${config.PT}://${config.HOST}:${config.PORT}`,
  headers: {
    "Content-Type":"application/json"
  }
})

export default request