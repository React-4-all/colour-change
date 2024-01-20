import { useState } from "react";

function CoulourChange() {
   const [colour, setColour] = useState(0);

    const colourList = ["blue", "green", "yellow", "orange", "red", "purple"];

   function handleClick() {
        setColour((prevColour) => (prevColour + 1) % colourList.length);

    };

    return (
        <>
        <div >
        <div className = "container">
            <h1>Changing Colours</h1>
            <div>
                <div className = "colour-displayed" style={{ backgroundColor: colourList[colour], width: '100px', height: '100px' }}></div>
            </div>
            <button onClick = {handleClick}>Change</button>
        </div>
        </div>

        </>
    )


}

export default CoulourChange