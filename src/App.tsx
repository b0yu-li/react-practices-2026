import { useState } from 'react'
import './App.css'
import { StarRating } from './components/StarRating'

function App() {
  const [currentRating, setCurrentRating] = useState(5)

  return (
    <>
      <StarRating
        maxStars={5}
        currentRating={currentRating}
        onChange={(newRating) => {
          setCurrentRating(newRating)
        }}></StarRating>
    </>
  )
}

export default App
