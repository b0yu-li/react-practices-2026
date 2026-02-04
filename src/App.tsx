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

  const stars = [];
  for (let index = 1; index <= maxStars; index++) {
    let starSymbol = '☆'
    if (index <= currentRating) {
      starSymbol = '★'
    }
    const star = <span
      style={{ cursor: 'pointer', fontSize: '24px' }}
      key={`${index}`}
      onClick={() => { handleClick(index) }}>{starSymbol}
    </span>
    stars.push(star)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>How would you rate it?</span>
      <div style={{ display: "flex", flexDirection: "row", gap: 3 }}>
        {stars}
      </div>
    </div>
  )
}

export default App
