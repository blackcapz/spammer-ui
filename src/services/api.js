import { HTTPClient } from '../utils/request'

export default {
  checkStatus: () => {
    return HTTPClient.get('/')
  },
  sendSpam: ({ strategy, groups, user, pass, text }) => {    
    return HTTPClient.post('spam', { strategy, groups, user, pass, text })
  }
}