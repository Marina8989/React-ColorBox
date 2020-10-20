import React, {useState} from 'react';
import Box from './Box';

ColorBox.defaultProps = {
    numBoxes: 16,
    allColors: [
        "Aqua",
        "Black",
        "BlanchedAlmond",
        "Blue",
        "Chocolate",
        "DodgerBlue",
        "Lavender",
        "LawnGreen",
        "Peru",
        "Plum",
        "SpringGreen",
        "SteelBlue",
        "Tan",
        "Teal",
        "Thistle",
        "Tomato",
        "Turquoise",
        "Violet",
        "Yellow",
        "YellowGreen"
    ]
}


function rand(arr) {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

function ColorBox(props) {
    const [boxes, setBoxes] = useState(
        Array.from({length: props.numBoxes}, () => rand(props.alColors))
    );
    const handleClick = evt => {
        let idx = Math.floor(Math.random() * props.numBoxes);

        setBoxes(boxes => {
            let boxCopy = [...boxes];
            boxCopy[idx] = rand(props.allColors);
            return boxCopy;
        })
    }
    const boxComponent = boxes.map((color, i) => <Box key={i} color={color} />);

    return (
        <div>
            <h2>{boxComponent}</h2>
            <button onClick={handleClick}>Change a Box</button>
        </div>
    )
}

export default ColorBox;