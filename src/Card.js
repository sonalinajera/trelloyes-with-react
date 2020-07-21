import React from 'react';

function Card(prop) {

    return(
        <div className="Card">
            <button type="button">delete</button>
            <h3>{prop.title}</h3>
            <p>{prop.content}</p>
        </div>
    );
}

export default Card