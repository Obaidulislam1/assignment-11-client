import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL ?
                </div>
                <div className="collapse-content">
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL. And five change such as
                        1. Language 2.Scalability 3.Structure 4.Properties 5.Support and communities</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto mt-2">
                <div className="collapse-title text-xl font-medium">
                What is JWT, and how does it work ?
                </div>
                <div className="collapse-content">
                    <p>The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto mt-2">
                <div className="collapse-title text-xl font-medium">
                What is the difference between javascript and NodeJS ?
                </div>
                <div className="collapse-content">
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-3/5 mx-auto mt-2">
                <div className="collapse-title text-xl font-medium">
                How does NodeJS handle multiple requests at the same time ?
                </div>
                <div className="collapse-content">
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>

        </div>
    );
};

export default Blog;