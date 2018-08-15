import { HTTPClient } from '../utils/request'

export default {
  checkStatus: () => {
    return HTTPClient.get('/')
  },

  sendSpam: (payload) => {
    return HTTPClient.post('/spam', payload)
  }
}