import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [services,setServices] = useState([]);
    useEffect( () =>{
       fetch('http://localhost:5000/vegetable') 
       .then(res => res.json())
       .then(data => setServices(data))
    },[])
    return (
        <div className='mb-10'>
            <div className='mb-10'>
            <h1 className='text-center text-3xl font-bold'>Our best product</h1>
            <p className='text-center font-bold'>Fom leafy greens to cruciferous veggies, vegetables are a gift from nature. <br /> Filled with immune-boosting antioxidants, fiber, B-vitamins and minerals, <br /> vegetables can make a big impact on your health.</p>
            </div>
            <div className='mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                services.map(service => <ServiceCard 
                key={service.id}
                service={service}
                ></ServiceCard>)
               }
            </div>
            <div className='flex justify-center items-center m-5'>
                <button className='btn btn-success'><Link to='/allvegetables'>All Vegetables</Link></button>
            </div>
        </div>
    );
};

export default Service;