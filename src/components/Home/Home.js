import React from 'react';
import Card from '../Card/Card';


const Home = () => {
    return (
        <div>
            <h1 className='text-6xl mt-5'>Welcome to my Branding Laptop !!!</h1>

            <div className='grid grid-cols-2  mt-14'>

                <div className=' p-14 '>

                    <h1 className='text-4xl text-indigo-900 mt-14'>Your Best Laptop</h1>
                    <h2 className='text-3xl'>Big offer is running</h2>
                    <p>Dell Latitude 7400 2-in-1.13.5" Touch-Screen Intel Core i5 - 8GB Memory - 128GB Solid State Drive (Latest Model) Platinum with Alcantara review: A great business laptop with 24 hour battery life.</p>
                </div>
                <div className='w-100'>
                    <img src="https://img.etimg.com/thumb/msid-70450624,width-650,imgsize-273503,,resizemode-4,quality-100/dell-expresssign-is-one-of-the-most-impressing-features-on-the-laptop-.jpg" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-4xl'>Our Reviwes</h1>
                <hr />
                <Card></Card>
            </div>
        </div>
    );
};

export default Home;