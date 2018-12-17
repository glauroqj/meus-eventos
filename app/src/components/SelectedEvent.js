import React, { Component } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Loading from './Loading'

import { getEvents } from '../utils/getEventsService'

class SelectedEvent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event: props.event,
      selected: '',
      loading: {
        status: false,
        text: 'Carregando evento...',
        size: 'large'
      }
    }
  }

  selectEvent = (value) => async (e) => {
    const {code} = this.props
    const { loading } = this.state
    const {id, name} = value
    console.log('selected: ', id, name, value)
    loading.status = true
    this.setState({loading})

    const selected = await getEvents(code, {}, `events/${id}/orders`)
    if (selected) {
      console.log(selected)
      /* add specifcs informations in selected */
      selected.title = name
      loading.status = false
      this.setState({
        loading,
        selected
      })
    }

  }

  back = (e) => {
    this.setState({
      selected: ''
    })
  }

  render() {
    const { event, selected, loading:{status, text, size} } = this.state
    return (
      <div className="me-list-events">
        {status &&
          <Loading text={text} size={size} />
        }
        {selected && !status &&
          <>
          <h2>{selected.title}</h2>
          <h5><b>Participantes:</b> {selected.data.length}</h5>
          <button onClick={this.back}>Voltar</button>
          </>
        }
      </div>
    )
  }
}

export default SelectedEvent