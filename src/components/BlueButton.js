import React from 'react';

function BlueButton(props) {
    const onClick = (e)=>{
        document.body.style.backgroundColor = "#0000FF";
    }
    return <button onClick={onClick}>Blue Background</button>
}

export default BlueButton;