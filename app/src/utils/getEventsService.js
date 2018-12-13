const axios = require('axios')
const {event, specifEvent} = require('../mock/events')
const url = 'https://api.sympla.com.br/public/v3/events'

const oneEvent = 'https://api.sympla.com.br/public/v3/events/{id}'
const orders = 'https://api.sympla.com.br/public/v3/events/{id}/orders'
const participants = 'https://api.sympla.com.br/public/v3/events/{id}/participants'

const ENV = (window.location.hostname === 'localhost') ? 'dev' : 'prod'

function getEvents(code, query) {
  return new Promise((resolve) => {
    const headers = {
      S_TOKEN: code
    }

    console.log('NODE_ENV: ', ENV)

    if (ENV === 'dev') {
      setTimeout(() => {
        console.log(event.data)
        if (query === '?fields=id,name,start_date,end_date,private_event,published') resolve(event.data)
        if (query === '/1?fields=id,name,start_date,end_date,private_event,published') resolve(specifEvent.data)
      }, 2000)
      return false
    }

    /* prod */
    axios.get(`${url+query}`, {headers})
    .then((response) => {
      resolve(response.data.data)
      console.log(response.data.data)
    })
    .catch((error) => {
      console.log(error);
    })
  })
}

module.exports = { getEvents }