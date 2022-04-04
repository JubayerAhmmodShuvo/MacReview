import React from 'react';

const SingleReview = ({ review }) => {
  const {description,name,img,rating} = review;
  return (
    <div>
      <div className="card border rounded h-full 	 ">
        <img src={ img} alt="stew" class="w-full lg:h-96  md:h-72 object-cover" />
 <div className="m-4">
          <span class="font-bold text-2xl">{name}</span>
          <p class="text-lg p-2">{description}</p>
          <span className="block text-gray-500 text-sm">Rating: { rating}</span>
 </div>
</div>
    </div>
  );
};

export default SingleReview;