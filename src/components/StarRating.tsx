interface Props {
    maxStars: number,
    currentRating: number,
    onChange: (newRating: number) => void
}


export const StarRating = ({ maxStars, currentRating, onChange }: Props) => {

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
        stars.push(<span onClick={() => { handleClick(index) }}>{starSymbol}</span>)
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