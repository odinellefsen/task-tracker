import Text from './Text'

const Texts = ({ texts, onDelete }) => {
   return (
    <>
       {texts.map((text) => (<Text key={text.id} text={text} onDelete={onDelete} />))} 
    </>
  )
}

export default Texts