import { useState } from 'react'

const AddText = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!title) {
            alert('Please add a title')
            return
        }

        onAdd({ title, text })

        setTitle('')
        setText('')
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label style={{userSelect: 'none'}}>Title</label>
            <input type='text' spellCheck="false" className='input-title' placeholder='max 50 characters' maxLength='50' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='form-control'>
            <label style={{userSelect: 'none'}}>Text</label>
            <textarea type='text' spellCheck="false" className='input-text' placeholder='Type text...' 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
        </div>

        <input type='submit' value='SAVE' className='btn btn-block' />
    </form>
  )
}

export default AddText