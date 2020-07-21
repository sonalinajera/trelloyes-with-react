import React from 'react';

import List from './List.js'

// List passed 2 props (and a key). The 2 props are header and cards.
//The header prop is a string for the List's header.
//The cards prop will be an array of card objects.
//You'll need to combine the cardIds array for the list with the allCards object.

function App(prop) {

  const listItems = prop.store.lists.map(function(item) {
    let cards = item.cardIds.map(function(id) {
        return prop.store.allCards[id];
      });
      console.log(cards)
  return <List key={item.id} header={item.header} cards={cards}/>
  })

  return (
    <main className='App'>
      <header>
        <h1>
        Trelloyes!
        </h1>
      </header>
      <div className="App-list">
        {listItems}
      </div>
      
    </main>
  );
}

export default App;