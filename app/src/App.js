import React, { Component } from 'react'

import { getHash } from './utils/localStorageInfo'
import { getEvents } from './utils/getEventsService'
/*pages */
import Login from './pages/Login'
import ListEvents from './pages/ListEvents'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      code: this.initialCode()
    }
  }

  initialCode() {
    getHash().then(async (result) => {
      if (!result) {
        /* show template login */
        this.setState({
          loading: false,
          code: result
        })
        return false
      }

      /* if exist hash, call the first events */
      const event = await getEvents(result, {fields: 'id,name,start_date,end_date,private_event,published'}, 'events')
      if (event) {
        this.setState({
          loading: false,
          code: result,
          event
        })
      }

    })
  }

  render() {
    const {loading, code, event} = this.state
    const list = {code, event}
    return (
      <div className="me-body">
        {loading &&
          <h4>Carregando...</h4>
        }
        {!loading && !code &&
          <Login />
        }
        {!loading && code &&
          <ListEvents {...list} />
        }
      </div>
    )
  }
}

export default App
