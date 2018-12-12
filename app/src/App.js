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
    getHash().then((result) => {
      if (!result) {
        this.setState({
          loading: false,
          code: result
        })
        return false
      }

      this.setState({
        loading: false,
        code: result
      },() => {
        /* call endpoint */
        getEvents(result, {})
      })
    })
  }

  render() {
    const {loading, code} = this.state
    return (
      <div className="me-body">
        {loading &&
          <h4>Carregando...</h4>
        }
        {!loading && !code &&
          <Login />
        }
        {!loading && code &&
          <ListEvents {...code} />
        }
      </div>
    )
  }
}

export default App
