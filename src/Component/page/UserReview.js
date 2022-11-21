import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UserReviewCard from './UserReviewCard';

const UserReview = () => {
    const [reviews, setReview] = useState({});
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to cancel this order')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                       alert('delete successfully');
                       const remaining = reviews.filter(review => review._id !== id);
                       setReview(remaining);
                }
            })
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Delete</th>
                        <th>Gmail</th>
                        <th>Item</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                {
                        reviews.map(review => <UserReviewCard
                            key={review._id}
                            review={review}
                            handleDelete={handleDelete}
                        ></UserReviewCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserReview;

