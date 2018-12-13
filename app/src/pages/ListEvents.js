import React, { Component } from 'react'
import { getEvents } from '../utils/getEventsService'

class ListEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      selected: '',
      loading: false
    }
  }

  selectEvent = (value) => async (e) => {
    const {code} = this.props
    const {id, name} = value
    console.log('selected: ', id, name, value)

    this.setState({loading: true})

    const selected = await getEvents(code, `/${id}?fields=id,name,start_date,end_date,private_event,published`)
    if (selected) {
      this.setState({
        loading: false,
        selected
      })
    }
    // getEvents(code, `/${id}`).then((selected) => {
    //   this.setState({
    //     loading: false,
    //     selected
    //   })
    // })
  }

  render() {
    const { data, selected, loading } = this.state
    return (
      <div className="me-list-events">
        {loading &&
          <h4>Carregando evento...</h4>
        }
        {!selected && !loading &&
          <>
          <h4>Lista de Eventos</h4>
          <ul>
            {data.map((item) => (
              <button onClick={this.selectEvent(item)}>
                <li>Nome: {item.name} - ID: {item.id}</li>
                <li>Início: {item.start_date} Fim: {item.end_date}</li>
                <li>Status: {item.private_event ? 'Privado' : 'Público'} - {item.published ? 'Publicado' : 'Rascunho'}</li>
              </button>
            ))}
          </ul>
          </>
        }
        {selected && !loading &&
          <h2>Show Spefic Event</h2>
        }
      </div>
    )
  }
}

export default ListEvents