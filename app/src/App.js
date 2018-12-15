import React, { Component } from 'react'

import Loading from './components/Loading'

import { getHash } from './utils/localStorageInfo'
import { getEvents } from './utils/getEventsService'
/*pages */
import Login from './pages/Login'
import ListEvents from './pages/ListEvents'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: {
        status: true,
        text: 'Carregando...',
        size: 'large'
      },
      code: this.initialCode()
    }
  }

  initialCode() {
    getHash().then(async (result) => {
      const { loading } = this.state
      if (!result) {
        /* show template login */
        loading.status = false
        this.setState({
          loading,
          code: result
        })
        return false
      }

      /* if exist hash, call the first events */
      const event = await getEvents(result, {fields: 'id,name,start_date,end_date,private_event,published'}, 'events')
      console.log('RESPONSE EVENT: ', event)
      if (event.data) {
        loading.status = false
        this.setState({
          loading,
          code: result,
          event
        })
      }

      if (!event.data) {
        localStorage.removeItem('meus-eventos-code')
        loading.text = 'Tivemos um problema, verifique o código informado'
        this.setState({ loading })

        setTimeout(() => {
          loading.status = false
          this.setState({ loading })
        }, 2000)

      }

    })
  }

  updateTemplate = () => {
    const { loading } = this.state
    console.log('UPDATE TEMPLATE')
    loading.status = true
    loading.text = 'Verificando e Carregando Eventos...'
    this.setState({ loading })

    this.initialCode()
  }

  render() {
    const { loading:{status, text, size}, code, event} = this.state
    const login = {
      updateTemplate: this.updateTemplate
    }
    const list = {code, event}
    return (
      <div className="me-body">
        {status &&
          <Loading text={text} size={size} />
        }
        {!status && !code &&
          <Login {...login} />
        }
        {!status && code &&
          <ListEvents {...list} />
        }
      </div>
    )
  }
}

export default App
