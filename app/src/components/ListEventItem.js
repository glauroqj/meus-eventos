import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const ListEventItem = props => (
  <>
    <Typography variant="h5" align="center" gutterBottom>
        Lista de Eventos
    </Typography>
    <List className="list-event-item">
        {props.event.data.map((item) => (
          <ListItem dense button key={item.id} onClick={props.selectEvent(item)}>
            <ul>
              <li>
                <ListItemText primary={item.name} />
              </li>
              <li>
                <ListItemText secondary={`ID: ${item.id}`} />
              </li>
              <li>
                <ListItemText secondary={`Início: ${item.start_date} Término: ${item.end_date}`} />
              </li>
              <li>
                <ListItemText secondary={`Status: ${item.divrivate_event ? 'Privado' : 'Público'} - ${item.published ? 'Exibido na plataforma' : 'Rascunho'}`} />
              </li>
            </ul>
          </ListItem>
        ))}
    </List>
  </>
)
ListEventItem.prototypes = {
  event: PropTypes.object.isRequired,
  selectEvent: PropTypes.func.isRequired
}
export default ListEventItem