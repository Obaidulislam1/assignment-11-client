import React from 'react';

const UserReviewCard = ({ review }) => {
    const { _id, email, name } = review;

    const handleDelete = id => {
        const proceed = window.confirm('are you sure you want to cancel this order')
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
            })
        }
    }
    return (
        <>
            <tr>
                <th><button onClick={() =>handleDelete(_id)} className='btn btn-ghost'>x</button></th>
                <td>{email}</td>
                <td>{name}</td>
                <td>{review.review}</td>
            </tr>
        </>
    );
};

export default UserReviewCard;
