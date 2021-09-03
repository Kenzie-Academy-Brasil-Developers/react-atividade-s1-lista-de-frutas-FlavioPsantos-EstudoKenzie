import { useState } from 'react';
import './style.css'

function Fruits({name}){
    const [fruits, setFruits] = useState([ { name: "banana", color: "yellow", price: 2 }, 
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 }, ]);

    const filterRedFruits = fruits.filter((item) => item.color === 'red')

    const value = fruits.map(
      (item)=>
       <li>{item.name}</li>
    )

    const price = fruits.reduce((acc, item)=> item.price + acc, 0)

    return(
        <>
            <div className='price'>Price = {price}</div>
            <ol>{value}</ol>
            <button onClick={()=> setFruits(filterRedFruits)}>Mostra Frutas Vermelhas</button>
        </>
    )
}
export default Fruits