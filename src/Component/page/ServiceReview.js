import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ServiceReview = () => {
    const { user } = useContext(AuthContext)
    const { name } = useLoaderData();

    return (
        <div className='flex items-center w-full mt-5 mb-10'>
            <form className='mx-auto w-3/4'>
                <textarea className="textarea w-full textarea-primary" placeholder="Review"></textarea>
                <div className='flex justify-center mt-5'>
                    <input className="btn btn-success" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};
export default ServiceReview;