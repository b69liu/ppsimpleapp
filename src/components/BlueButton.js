import React from 'react';

function BlueButton(props) {
    const onClick = (e)=>{
        const my_div = document.getElementById("app-div");
        my_div.style.backgroundColor = "#0000FF";
    }
    return <button data-testid={`blue-btn`} onClick={onClick}>Blue Background</button>
}

export default BlueButton;