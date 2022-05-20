import React from 'react';
import '../Die/Die.css'

function Die({face}) {
    return <i className={`die fas fa-dice-${face}`}></i>;
}

export default Die;