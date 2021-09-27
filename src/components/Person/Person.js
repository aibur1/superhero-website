import React from 'react';
import './Person.css';

const Person = (props) => {
    const { name, img, rank, salary, country, age } = props.person;
    return (
  //details show 
<div className="col-md-4 ">
        <div className="card-group mb-5">
          <div class="card image-bg">
        <img  src={img} className="card-img-top image" alt="..."/>
    <div className="card-body ">
         <h3>Name: {name}</h3>
        <h4>Country : {country}</h4>
        <h4>Age : {age}</h4>
        <h5>Rank : {rank}</h5>
        <h6>Salary : ${salary}</h6>

          <button className="btn-regular"
           onClick={ () => props.handleAddCart(props.person)}
          ><i className="fas fa-user-circle text-danger"></i> Add To Cart</button>
    </div>
         </div>
    </div>
 </div>

    );
};

export default Person;