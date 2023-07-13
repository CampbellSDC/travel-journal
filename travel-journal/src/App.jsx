import { useState } from 'react'
import Header from './Header/Header'
import data from './Cards/cardData'
import Card from './Cards/Card'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const card = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <>
      <Header />
      {card}
    </>
  )
}

export default App
