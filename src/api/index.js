import axios from 'axios'

export default axios.create({
  baseURL:
    'https://raw.githubusercontent.com/kelkoo-services/kelisto-frontend-js-challenge-crypto/master/data/response.json',
})
