import React from 'react'
import PropTypes from 'prop-types'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

const ListEventItem = props => (
  <>
    <Typography variant="title" align="center" gutterBottom>
        Lista de Eventos
    </Typography>
    <List component="nav">
        {props.event.data.map((item) => (
          <ListItem button>
            <ListItemText 
            primary={`${item.id} ${item.name}`}
            secondary={
              <>
                <div>{`Início: ${item.start_date} Término: ${item.end_date}`}</div>
                <div>Status: {item.divrivate_event ? 'Privado' : 'Público'} - {item.published ? 'Exibido na plataforma' : 'Rascunho'}</div>
              </>
            }
          />
          </ListItem>
        ))}
    </List>
  </>
)
// ListEventItem.prototypes = {
//   text: PropTypes.string.isRequired,
//   size: PropTypes.string.isRequired
// }
export default ListEventItem