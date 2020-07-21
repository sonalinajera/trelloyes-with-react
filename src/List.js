import React from 'react';
import STORE from './store.js'
import Card from './Card.js'

function List(prop) {
    
    const cardArray = prop.cards.map(function(card) {
        return <Card key={card.id} title={card.title} content={card.content}/>
    })


    return (
        <section className="List">
            <header className="List-header">
            <h2>{prop.header}</h2>
            </header>

            <div className="List-cards">
            {cardArray}
            <button type="button" className="List-add-button">
                + Add Random Card
             </button>
            </div>
            
        </section>
    );
}

export default List