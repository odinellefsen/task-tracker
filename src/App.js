import Header from "./components/Header";
import Texts from "./components/Texts";
import Footer from "./components/Footer";
import AddText from "./components/AddText";
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./components/About";

function App() {
  const [showAddText, setShowAddText] = useState(false)

  const [texts, setTexts] = useState([])


  useEffect(() => {
    const getTexts = async () => {
      const textsFromServer = await fetchTexts()
      setTexts(textsFromServer)
    }

    getTexts()
  }, [])

  // Fetch Texts
  const fetchTexts = async () => {
    const res = await fetch('http://localhost:5000/texts')
    const data = await res.json()

    return data
  }


  // Add Text
  const addText = async (text) => {
    const res = await fetch('http://localhost:5000/texts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(text)
    })

    const data = await res.json()

    setTexts([...texts, data])
  }


  // Delete Text
  const deleteText = async (id) => {
    await fetch(`http://localhost:5000/texts/${id}`, {
      method: 'DELETE',
    })

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
