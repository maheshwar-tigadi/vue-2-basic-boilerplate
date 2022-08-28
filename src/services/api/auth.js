import axios from 'axios'

export default {
  userLogin(payload) {
    // return axios.post('/login', payload)
    return new Promise((resolve) => {
      payload.username = 'username'
      resolve(payload)
    })
  },
  refreshToken() {
    return axios.get('/token')
  }
}
