import Header from "./components/Header";
import Texts from "./components/Texts";
import Footer from "./components/Footer";
import AddText from "./components/AddText";
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./components/About";

function App() {
  const [showAddText, setShowAddText] = useState(false)

  const [texts, setTexts] = useState([
    {
      id: 1,
      title: 'Ommu bollar uppskrift',
      text: '500g mjøl, 1 ger, 1 súpuskeið sukur, 1 teskeið salt, 50g flótandi margarin, 2dl mjólk, 1dl kókandi heitt vatn. Lata deiggið heva í 1 tíma. Forma bollarnar og so skula teir heva í 30min. 225celsius formvarmaðan ovn í 12 min.',
    },
    {
      id: 2,
      title: 'You are the champ',
      text: 'the title is da tru tru',
    },
    {
      id: 3,
      title: 'Lambo go brr brr',
      text: 'lambos are just great man like omg like one of the best lambos has to be the lamborghini hurancan sto that backpart of it is just hella insane bro',
    }  
  ])


  // Add Text
  const addText = (text) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newText = { id, ...text }
    setTexts([...texts, newText])
  }


  // Delete Text
  const deleteText = (id) => {
    setTexts(texts.filter((text) => text.id !== id))
  }

 
  return (
    <Router>
    <div className='container'>
      <Header onAdd={() => setShowAddText(!showAddText)} showAdd={showAddText}/>
      <Routes>
      <Route path='/' element={
        <>
        {showAddText && <AddText onAdd={addText} />}
        {texts.length > 0 ? <Texts texts={texts} onDelete={deleteText}/> : 'No Text To Show'}
        </>
      } />
      <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
