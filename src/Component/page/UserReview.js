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

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
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
                        ></UserReviewCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserReview;

