import React from 'react';

function RedButton(props) {
    const onClick = (e)=>{
        const my_div = document.getElementById("app-div");
        my_div.style.backgroundColor = "#FF0000";
    }
    return <button data-testid={`red-btn`} onClick={onClick}>Red Background</button>
}

export default RedButton;