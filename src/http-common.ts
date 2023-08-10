import axios from 'axios'

export default axios.create({
  baseURL: "http://18.117.170.158:8080",
  headers: {
    'Content-type': 'application/json'
  }
})