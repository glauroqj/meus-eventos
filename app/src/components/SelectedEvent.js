import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const SelectedEvent = props => (
  <>
    <Typography variant="h5" align="center" gutterBottom>
      {props.selected.title}
    </Typography>
    <List className="list-event-item">
      <ListItem dense>
        <ul>
          <li>
            <ListItemText primary={`Participantes: ${props.selected.data.length}`} />
          </li>
          <li>
            <Button variant="contained" color="secondary" onClick={props.back}>
              Voltar
            </Button>
          </li>
        </ul>
      </ListItem>
    </List>
  </>
)
SelectedEvent.prototypes = {
  selected: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired
}
export default SelectedEvent