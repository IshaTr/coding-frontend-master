export const fetchAds = () => {
  return fetch('localhost:8080/ads')
}

export const fetchAdDetail = (id) => {
  return fetch(`localhost:8080/ads/${id}`)
}