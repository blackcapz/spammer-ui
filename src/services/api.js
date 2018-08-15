import { HTTPClient } from '../utils/request'

export default {
  checkStatus: () => {
    return HTTPClient.get('/')
  }
}