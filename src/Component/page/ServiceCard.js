import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { description, name, picture, price, weight,_id } = service;
    return (
        <div>
            <div className="card w-full glass mx-auto mr-3">
                <figure><img src={picture} className='w-full h-60' alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <span>price: ${price} weight:{weight}</span>
                    <div className='flex items-center justify-end'>
                        <span><Link to={`/serviceReview/${_id}`}>Review</Link></span>
                        <span className='mt-1 ml-2'><FaAngleRight/></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;