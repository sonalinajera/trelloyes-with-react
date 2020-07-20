import React from 'react';
import STORE from './store.js'

function Card(props) {
    const cardInfo = STORE.allCards.

    return(
        <div className="Card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default Card