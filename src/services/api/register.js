import axios from 'axios'

export default {
  userSignUp(payload) {
    // return axios.post('/register', payload)
    // for testing porpose
    // uncomment the axio.post for testing with api
    return new Promise((resolve) => {
      payload.username = 'username'
      resolve(payload)
    })
  },
  register(payload) {
    return axios.post('/register', payload)
  }
}
