import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UserReviewCard from './UserReviewCard';

const UserReview = () => {
    const [reviews, setReview] = useState({});
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    return (
        <div>
             {
                reviews.map(review => console.log(review.length))
             }
             <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserReview;