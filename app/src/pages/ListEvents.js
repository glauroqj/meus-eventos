import React, { Component } from 'react'

class ListEvents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  render() {
    return (
      <div className="me-list-events">
        <h4>Lista de Eventos</h4>
      </div>
    )
  }
}

export default ListEvents