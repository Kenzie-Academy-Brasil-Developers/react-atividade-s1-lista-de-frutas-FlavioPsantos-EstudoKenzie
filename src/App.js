import './App.css';
import { useState } from 'react';
import './Components/Fruits'
import Fruits from './Components/Fruits';

function App() {
  const [fruits, setFruits] = useState([ { name: "banana", color: "yellow", price: 2 }, 
  { name: "cherry", color: "red", price: 3 },
  { name: "strawberry", color: "red", price: 4 }, ]);
  const filterRedFruits = fruits.filter((item) => item.color === 'red')
  const value = fruits.map(
    (item)=>
     <Fruits name={item.name}/>
  )
  const price = fruits.reduce((acc, item)=> item.price + acc, 0)
  return (
    <div className="App">
      <header className="App-header">
        <div className='price'>Price = {price}</div>
        <div>
            <ol>
              {value}
            </ol>
          </div>
        <button onClick={()=> setFruits(filterRedFruits)}>Mostra Frutas Vermelhas</button>
      </header>
    </div>
  );
}

export default App;
