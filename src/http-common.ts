import axios from 'axios'

export default axios.create({
  baseURL: 'https://18.224.69.79:8080',
  headers: {
    'Content-type': 'application/json'
  }
})