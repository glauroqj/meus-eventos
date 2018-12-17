import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

const Loading = props => (
  <Button disabled size={props.size}>
    {props.text}
  </Button>
)
Loading.prototypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}
export default Loading