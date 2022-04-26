

const Button = ({ text, color, onClick }) => {
  return (
    <button
    onClick={onClick} 
    className='btn' 
    style={{backgroundColor: color, userSelect:'none'}}
    >{text}
    </button>
  )
}

export default Button