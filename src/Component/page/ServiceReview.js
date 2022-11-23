import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ServiceReview = () => {
    const { user } = useContext(AuthContext)
    const {_id,name} = useLoaderData();

const handleReview = event =>{
    event.preventDefault();
    const form = event.target;
    const email = user?.email || 'unregistered';
    const review = form.review.value;

const userReview ={
    id: _id,
    name,
    email,
    review,
}
fetch('https://assignment-11-server-psi.vercel.app/review', {
    method: 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(userReview)
})
.then(res =>res.json())
.then(data => {
    console.log(data)
    if(data.acknowledged){
        alert('review successfully submit');
        form.reset();
    }
})
.catch(err => console.error(err));
}

    return (
        <div className='flex items-center w-full mt-5 mb-10'>
            <form onSubmit={handleReview} className='mx-auto w-3/4'>
                <textarea name="review" className="textarea w-full textarea-primary" placeholder="Review"></textarea>
                <div className='flex justify-center mt-5'>
                    <input  className="btn btn-success" type="submit" value="Submit" />
                </div>
            </form>

        </div>
    );
};
export default ServiceReview;