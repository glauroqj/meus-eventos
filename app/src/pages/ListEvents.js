import React, { Component } from 'react'

import Loading from '../components/Loading'
import SelectedEvent from '../components/SelectedEvent'
import ListEventItem from '../components/ListEventItem'
import { getEvents } from '../utils/getEventsService'

import '../assets/css/list-events.css'

class ListEvents extends Component {
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
    const listEventItem = {
      event,
      selectEvent: this.selectEvent
    }
    const selectedEvent = {
      selected
    } 
    return (
      <div className="me-list-events">
        {status &&
          <Loading text={text} size={size} />
        }
        {!selected && !status &&
          <ListEventItem {...listEventItem} />
        }
        {selected && !status &&
          <SelectedEvent {...selectedEvent} />
        }
      </div>
    )
  }
}

export default ListEvents