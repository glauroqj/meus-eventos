const axios = require('axios')
const {event, order, participant} = require('../mock/events')

// const oneEvent = 'https://api.sympla.com.br/public/v3/events/{id}'
// const orders = 'https://api.sympla.com.br/public/v3/events/{id}/orders'
// const participants = 'https://api.sympla.com.br/public/v3/events/{id}/participants'

const ENV = (window.location.hostname === 'localhost') ? 'dev' : 'prod'
/*
token: hash
query: {fields: 'id'}
type: 'events', '{eventID}/orders', '{eventID}/participants'
*/
function getEvents(token, query, type) {
  return new Promise((resolve) => {
    let url = 'https://api.sympla.com.br/public/v3/'
    const headers = {
      S_TOKEN: token
    }
    const params = {
      query
    }
    url += type

    console.log('NODE_ENV: ', ENV)
    console.log('URL: ', url)

    if (ENV === 'dev') {
      setTimeout(() => {
        if (type === 'events') resolve(event)
        if (type === 'events/1/orders') resolve(order)
        if (type === 'events/1/participants') resolve(participant)
      }, 2000)
      return false
    }

    // /* prod */
    axios.get(url, {headers, params})
    .then((response) => {
      resolve(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
      resolve(error)
    })

  })
}

module.exports = { getEvents }