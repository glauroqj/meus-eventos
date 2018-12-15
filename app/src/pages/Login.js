import React, { Component } from 'react'
import { setHash } from '../utils/localStorageInfo'

import Loading from '../components/Loading'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import '../assets/css/login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      loading: false
    }
  }

  onChange = (e) => {
    const {value} = e.target
    console.log(value)
    this.setState({input: value})
  }

  sendHash = async (e) => {
    e.preventDefault()
    const { updateTemplate } = this.props
    const { input } = this.state


    if (!input) {
      return false
    }

    this.setState({ loading: true })

    const status = await setHash(input)
    if (status) {
      console.log('SET HASH and update template:', status)
      updateTemplate()
    }
  }

  render() {
    const { loading } = this.state
    return (
      <div className="me-login">
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper>
              {loading && (
                <Loading text={'Salvando e Carregando Eventos...'} size={'medium'} />
              )}
              {!loading && (
                <form onSubmit={this.sendHash}>
                  <FormControl>
                    <TextField
                      id="standard-name"
                      label="Informe seu código"
                      value={this.state.input}
                      onChange={this.onChange}
                      margin="normal"
                      variant="outlined"
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={this.sendHash}
                    >
                      Enviar
                    </Button>
                  </FormControl>
                </form>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Login