import React, { useEffect, useState } from 'react';
import AllvegetableCard from './AllvegetableCard';

const Allvegetables = () => {
    const [vegetables,setVegetable] = useState([]);
    useEffect( () =>{
       fetch('http://localhost:5000/vegetables') 
       .then(res => res.json())
       .then(data => setVegetable(data))
    },[])
    return (
        <div className='mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
            {
                vegetables.map(vegetable => <AllvegetableCard
                key={vegetable._id}
                vegetable={vegetable}
                ></AllvegetableCard>)
            }
        </div>
    );
};

export default Allvegetables;