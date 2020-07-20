import React from 'react';
import STORE from './store.js'
import Card from './Card.js'

function List(props) {

    const listHeaderTitles = STORE.lists.map(function (listItem) {
        return listItem.header;
    }); // ["First list", "Second list", "Third list", "Fourth list"]
   
    console.log(listHeaderTitles)

    return (
        <section className="List">
            <header className="List-header">
        
                
            </header>

            <div className="List-cards">
                {props.card}
            </div>
        </section>
    );
}

export default List