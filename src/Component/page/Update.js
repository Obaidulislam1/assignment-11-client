import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const userReview = useLoaderData();
    const [review, setReview] = useState(userReview);
    console.log(userReview)

    const handleUpdate = event => {
        event.preventDefault()
        console.log(review);
        fetch(`https://assignment-11-server-psi.vercel.app/review/${userReview._id}`,{
         method: 'PUT',
         headers:{
            'content-type': 'application/json'
         },
         body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                alert('review updated successfully')
            }
        })


    }
    const updateHandle = event => {
        const field = event.target.name;
        console.log(field)
        const value = event.target.value;
        const newUpdate = { ...review }
        newUpdate[field] = value

        setReview(newUpdate);
    }

    return (
        
            <form onSubmit={handleUpdate}>
                <div className='flex justify-center'>
                    <div className='w-3/5'>
                    <textarea onBlur={updateHandle} name='update' className="textarea textarea-primary w-full" placeholder="review" defaultValue={userReview.review}></textarea> <br />
                    <button className="btn btn-active btn-ghost" type='submit'>Update</button>
                    </div>
                </div>
            </form>
    
    );
};

export default Update;