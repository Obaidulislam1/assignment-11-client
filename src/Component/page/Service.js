import React, { useEffect, useState } from 'react';

const Service = () => {
    const [services,setServices] = useState([]);
    useEffect( () =>{
       fetch('product.json') 
       .then(res => res.json())
       .then(data => setServices(data))
    },[])
    return (
        <div>
            <div>
            <h1 className='text-center text-3xl font-bold'>Our best product</h1>
            <p className='text-center font-bold'>Fom leafy greens to cruciferous veggies, vegetables are a gift from nature. <br /> Filled with immune-boosting antioxidants, fiber, B-vitamins and minerals, <br /> vegetables can make a big impact on your health.</p>
            </div>
            <div className='mx-auto'>
               {services.length} 
            </div>
        </div>
    );
};

export default Service;