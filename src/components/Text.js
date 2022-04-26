import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Text = ({ text, onDelete }) => {
  const [showFullText, setShowFullText] = useState(false)

  return (
    <div className='text' onClick={() => setShowFullText(!showFullText)}>
        <h3>{text.title} <FaTimes onClick={() => onDelete(text.id)} style={{color:'red', cursor:'pointer'}}/></h3>
        {showFullText ? <p>{text.text}</p> : <p className='text-p'>{text.text}</p>}
    </div>
  )
}

export default Text