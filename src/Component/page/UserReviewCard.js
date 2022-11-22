import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const UserReviewCard = ({ review,handleDelete }) => {
    const { _id, email, name } = review;
    return (
            <tr>
                <th><button onClick={() =>handleDelete(_id)} className='btn btn-ghost'>X</button></th>
                <td>{email}</td>
                <td>{name}</td>
                <td>{review.review}</td>
                <td><Link to={`/review/${_id}`}><button className='btn btn-ghost'>Update</button></Link></td> 
            </tr>
    );  
};

export default UserReviewCard;
