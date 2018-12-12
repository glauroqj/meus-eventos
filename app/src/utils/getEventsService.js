const axios = require('axios')

const url = 'https://api.sympla.com.br/public/v3/events'

const oneEvent = 'https://api.sympla.com.br/public/v3/events/{id}'
const orders = 'https://api.sympla.com.br/public/v3/events/{id}/orders'
const participants = 'https://api.sympla.com.br/public/v3/events/{id}/participants'

function getEvents(code, type) {
  const headers = {
    S_TOKEN: code
  }
  const params = {
    type
  }
  axios.get(url, {headers}, {params})
  .then((response) => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error);
  })
  // try {
  //   const response = await axios.get(url, {headers}, {params})
  //   console.log(response)
  // } catch (error) {
  //   console.error(error)
  // }
}

module.exports = { getEvents }