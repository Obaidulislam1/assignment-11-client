import React from 'react';

const Review = () => {
    return (
        <div>
            <div className='mb-10'>
                <h1 className='text-center font-bold text-3xl'>Customer Review</h1>
                <p className='text-center font-bold'>the majority have suffered alteration in some form, <br /> by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
                <div className="card w-full glass mx-auto ">

                    <div className='avatar flex items-center'>
                        <div className='w-20 h-20 rounded-full avatar ml-3 mt-5'>
                            <img src="https://image.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg" alt="car!" />
                        </div>
                        <h2 className="card-title ml-5">Md Bosir mia</h2>
                    </div>
                    <div className="card-body">
                        <p>With its user-friendy interface, we've seen responses to surveys and feedback improve drastically.</p>
                    </div>
                </div>
                <div className="card w-full glass mx-auto ">

                    <div className='avatar flex items-center'>
                        <div className='w-20 h-20 rounded-full avatar ml-3 mt-5'>
                            <img src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=" alt="car!" />
                        </div>
                        <h2 className="card-title ml-5">D Korim</h2>
                    </div>
                    <div className="card-body">
                        <p>Typeform allowed us to get to the core of what our product should be—what features to focus on, and where people are struggling.</p>
                    </div>
                </div>
                <div className="card w-full glass mx-auto ">

                    <div className='avatar flex items-center'>
                        <div className='w-20 h-20 rounded-full avatar ml-3 mt-5'>
                            <img src="https://www.cdc.gov/cancer/breast/men/images/man-ribbon-1200x630.jpg?_=59339" alt="car!" />
                        </div>
                        <h2 className="card-title ml-5">Jamil sorkar</h2>
                    </div>
                    <div className="card-body">
                        <p>Ask for more detail when you need it, or skip questions entirely. People share more when surveys feel relevant.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;