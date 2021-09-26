import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const {cart} = props;
    let name = []
    let total = 0
    for(const person of cart){
        total = total + person.salary;
        name = name + person.name;
        
    }
   
    return (
        <div className="cart" >
            <h2><i class="fas fa-user"></i> Person added:{props.cart.length}</h2>
            <h3>Estimate Cost : ${total}</h3>
            <h4>Name : {name}</h4>
            
        </div>
    );
};

export default Cart;