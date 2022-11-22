import React from 'react';

const UserReviewCard = ({ review,handleDelete }) => {
    const { _id, email, name } = review;
   
     

    return (
            <tr>
                <th><button onClick={() =>handleDelete(_id)} className='btn btn-ghost'>X</button></th>
                <td>{email}</td>
                <td>{name}</td>
                <td>{review.review}</td>
            </tr>
    );  
};

export default UserReviewCard;
