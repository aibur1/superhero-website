import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './Main.css';

const Main = () => {

 const [persons, setPersons] = useState ([]);
 const [cart, setCart] = useState([]);

 useEffect ( () => {
     fetch('/profile.JSON')
     .then(res => res.json())
     .then(data => setPersons(data))
 } ,[])

  const handleAddCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart)
  }

    return (
        <div className="row container">

            <div className=" col-md-10">
              {/* person details show */}
            <div className="row">
               {
                 persons.map(person => <Person
                   key = {person.id}
                   person = {person}
                   handleAddCart = {handleAddCart} 
                   ></Person>)
                }
            </div>
          </div>
             {/* total amount show */}
            <div className="col-md-2 ">
                    <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Main;