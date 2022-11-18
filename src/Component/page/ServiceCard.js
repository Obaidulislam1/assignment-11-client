import React from 'react';

const ServiceCard = ({ service }) => {
    const {description,name,picture,price,weight} = service;
console.log(service);
    return (
        <div className="card w-full glass mx-auto mr-3">
            <figure><img src={picture} className='w-full h-60' alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <span>price: ${price} weight:{weight}</span> 
                <span></span>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;