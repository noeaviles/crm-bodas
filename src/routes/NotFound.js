import React from 'react'
import {Link} from 'react-router-dom'
const NotFound = () => {
  return (
    <div>NotFound
        <h1>404</h1>
        <Link to="/">Regresar al Inicio</Link>
    </div>
  )
}

export default NotFound