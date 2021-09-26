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
        <div className="row">

            <div className=" col-md-9">
              
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

            <div className="col-md-3 ">
                    <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Main;