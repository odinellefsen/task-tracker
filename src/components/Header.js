import { HEADER_TEXT } from "../strings"
import { useLocation } from 'react-router-dom'
import Button from "./Button"

const Header = ({ onAdd, showAdd }) => {
  const location= useLocation()

  return (
    <div className='header'>
        <h1>{HEADER_TEXT}</h1>
        {location.pathname === '/' && <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red': 'green'} onClick={onAdd} />}
    </div>
  )
}

export default Header