import React from 'react';
import { Link } from 'react-router-dom';

import sd from '../../images/ee.png'
import UserReview from '../hooks/UserReview';
import SingleReview from '../SingleReview/SingleReview';

const Home = () => {
   const [review, setReview]=UserReview();
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-9 lg:mb-10 mb-24">
        <div className="lg:col-span-2  lg:ml-20 justify-center items-center flex flex-col lg:mt-20  ">
         <h1 className="text-5xl font-extrabold  ">This MacBook Pro</h1>
          <h1 className="text-5xl font-extrabold  text-fuchsia-500">Beyond Everything</h1>
          <p className='text-lg px-6 py-10  lg:px-14 lg:py-8 text-justify'>This is the best ever macbook pro we have ever build. This machine comes with a M1 chipset which is more powerful than any devices we have ever built. With that machine you can do anything that you desire to do. Connect your 13-inch MacBook Pro to a power outlet using the included USB-C Charge Cable and 61W USB-C Power Adapter.

Connect your 14-inch or 16-inch MacBook Pro to a power outlet using the included 67W USB-C Power Adapter, 96W USB-C Power Adapter, or 140W USB-C Power Adapter and USB-C to MagSafe 3 Cable.</p>
          <button className="text-xl text-white font-semibold p-4 bg-indigo-500 rounded lg:mb-3 mb-12">
            <Link to="/blog">Explore More</Link>
          </button>
        </div>
        <div className="lg:col-span-1  mr-5 ">
          <img className='h-96 lg:mt-32 ' src={ sd} alt="" />
        </div>
      </div>
      <div className="text-4xl p-10 lg:mt-12 md:mt-12">
        <h1>Total Comments: 3</h1>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:mx-24 lg:mt-16 md:mb-10">
        {
          review.slice(0, 3).map(review =>
           
            <SingleReview
            key={review.id}
            review={review}
          />
          )
        }
      
      </div>
      <button className='text-xl text-white font-semibold  px-14 py-3 bg-indigo-500 rounded lg:mb-16 mb-12 mt-10'><Link to="/reviews" >See all reviews</Link></button>
    </div>
  );
};

export default Home;