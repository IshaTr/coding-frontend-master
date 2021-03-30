import axios from 'axios'

export const fetchAds = () => {
  return axios.get('http://localhost:8080/ads')
}

export const fetchAdDetail = (id = 0) => {
  return axios.get(`http://localhost:8080/ads/${id}`)
}
