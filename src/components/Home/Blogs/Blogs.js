import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-3xl'>This is blogs item </h2>
            <div className='flex mt-10 mx-20'>
                <div className='w-30 m-10' >
                    <h1 className='text-2xl'>What is context API?</h1>
                    <p>The Context API is a reactive structure that enables the exchange of unique details and facilitates prop-drilling solutions from all levels of the application.</p>
                </div >
                <div className='w-30 m-10'>
                    <h1 className='text-2xl '>what is a semantic tag?</h1>
                    <p>Semantic tags are those that clearly define their meaning in human and machine-readable ways. Elements like header, footer, and article are all considered semantic because they accurately describe the purpose of the element and the type of content contained within them.</p>
                </div>
                <div className='w-30 m-10'>
                    <h1 className='text-2xl'>The difference between inline and block elements?</h1>
                    <p>Inline element shows all element in a line and otherwise block element shows all element in different line.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;