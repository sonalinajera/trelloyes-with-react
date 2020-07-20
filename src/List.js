import React from 'react';
import STORE from './store.js'
import Card from './Card.js'

function List(props) {

    const listHeaderTitles = STORE.lists.map(function (listItem) {
        return (
        <section className="List" key={listItem.id}> 
        <header className="List-header">
            <h1>{listItem.header}</h1>
        </header> 
        <div className="List-cards">
                {props.card}
        </div>
        </section>);
    }); // ["First list", "Second list", "Third list", "Fourth list"]
   
    console.log(listHeaderTitles)

    return (
        
        <div>
        
        {listHeaderTitles}
                    
        </div>
    );
}

export default List