import React, { Component } from 'react'
import { setHash } from '../utils/localStorageInfo'
import '../assets/css/login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  onChange = (e) => {
    const {value} = e.target
    console.log(value)
    this.setState({input: value})
  }

  sendHash = async () => {
    const { input } = this.state

    const status = await setHash(input)
    if (status) {

    }
  }

  render() {
    return (
      <div className="me-login">
        <h4>Informe seu hash:</h4>
        <input type="text" onChange={this.onChange} />
        <button onClick={this.sendHash}>Enviar</button>
      </div>
    )
  }
}

export default Login