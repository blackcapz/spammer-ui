import axios from 'axios'

export const HTTPClient = axios.create({
  baseURL: 'http://localhost:5000'
})