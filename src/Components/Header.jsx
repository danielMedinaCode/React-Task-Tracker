import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import Button from './Button'

const Header = ({ title, onAdd, showAdd}) => {
  const location = useLocation()
  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === "/" &&
        <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? "Close" : "Add"} 
          onClick={onAdd}
        />}
    </div>
  )
}
// Valor por Defecto para nuestros props
Header.defaultProps = {
  title: 'Task Tracker'
}

// Esto es una manera de darle types a nuestros props
// Muy similar a typescript
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
