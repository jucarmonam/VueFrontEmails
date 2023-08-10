import axios from 'axios'

export default axios.create({
  baseURL: "http://3.144.34.12:8080",
  headers: {
    'Content-type': 'application/json'
  }
})