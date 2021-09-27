import React from 'react';
import './Cart.css';

const Cart = (props) => {
 
    const {cart} = props;
    let name = []
    let total = 0

    for(const person of cart){
        total = total + person.salary;
        // name = name + person.name;  
        name = [...name,person.name];
          
       
    }
   
    return (
        <div className="cart" >
            <h3><i class="fas fa-user text-primary"></i> Person added:{props.cart.length}</h3>
            <h5>Total Cost : $ {total}</h5>
             {/* <h6>Name : {name}</h6>  */}
        </div>
    );
};

export default Cart;