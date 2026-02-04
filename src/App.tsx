import { useState } from 'react'
import './App.css'

function App() {
  const [currentRating, setCurrentRating] = useState(5)

  return (
    <>
      <StarRating
        maxStars={7}
        currentRating={currentRating}
        onChange={(newRating) => {
          setCurrentRating(newRating)
        }}></StarRating>
    </>
  )
}

interface StarRatingProps {
  maxStars?: number,
  currentRating: number,
  onChange: (newRating: number) => void
}

const StarRating = ({ maxStars = 5, currentRating, onChange }: StarRatingProps) => {

  const handleClick = (index: number) => {
    console.debug(`Star no. ${index} clicked`);
    onChange(index);
  };

  const buildStars = (() => {
    const indices = Array.from({ length: maxStars }, (_, index) => { return index + 1 })
    return indices.map(index => {
      return <span
        style={{ cursor: 'pointer', fontSize: '24px' }}
        key={`${index}`}
        role='button'
        onClick={() => { handleClick(index) }}>{index <= currentRating ? '★' : '☆'}
      </span>
    })
  })

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>How would you rate it?</span>
      <div style={{ display: "flex", flexDirection: "row", gap: 3 }}>
        {buildStars()}
      </div>
    </div>
  )
}

export default App
