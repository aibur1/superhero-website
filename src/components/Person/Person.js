import React from 'react';
import './Person.css';

const Person = (props) => {
    console.log(props)
    const { name, img, rank, salary, country, age } = props.person;
    return (
        

<div className="col-md-4 ">
            {/* <div class="card mb-3 " style={{"max-width":"540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body ">

        <h2>Name: {name}</h2>
        <h3>Country : {country}</h3>
        <h4>Age : {age}</h4>
        <h5>Rank : {rank}</h5>
        <h6>Salary : {salary}</h6>

        <button
             onClick={ () => props.handleAddCart(props.person)}
            ><i class="fas fa-user-circle"></i> Add to cart</button>

      </div>
    </div>
  </div>
</div> */}
<div className="card-group mb-5">
  <div class="card image-bg">
    <img  src={img} className="card-img-top image" alt="..."/>
    <div className="card-body ">
    <h2>Name: {name}</h2>
        <h3>Country : {country}</h3>
        <h4>Age : {age}</h4>
        <h5>Rank : {rank}</h5>
        <h6>Salary : {salary}</h6>

        <button className="btn-regular"
             onClick={ () => props.handleAddCart(props.person)}
            ><i class="fas fa-user-circle"></i> Add to cart</button>
    </div>
    
  </div>
 
</div>
       </div>

    );
};

export default Person;