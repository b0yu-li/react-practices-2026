import { useState } from 'react'
import './App.css'

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

interface StarRatingProps {
  maxStars: number,
  currentRating: number,
  onChange: (newRating: number) => void
}

const StarRating = ({ maxStars, currentRating, onChange }: StarRatingProps) => {

  const handleClick = (index: number) => {
    console.debug(`Star no. ${index} clicked`);
    onChange(index);
  };

  const stars = [];
  for (let index = 0; index < maxStars; index++) {
    let starSymbol = '☆'
    if (index <= currentRating) {
      starSymbol = '★'
    }
    const star = <span
      key={`${index}`}
      onClick={() => { handleClick(index) }}>{starSymbol}
    </span>
    stars.push(star)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span>How would you rate it?</span>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {stars}
      </div>
    </div>
  )
}

export default App
