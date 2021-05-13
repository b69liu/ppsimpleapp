import React from 'react';

function RedButton(props) {
    const onClick = (e)=>{
        document.body.style.backgroundColor = "#FF0000";
    }
    return <button onClick={onClick}>Red Background</button>
}

export default RedButton;