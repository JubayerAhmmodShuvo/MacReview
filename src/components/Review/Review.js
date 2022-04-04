import React from 'react';
import UserReview from '../hooks/UserReview';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
  const [review, setReview] = UserReview();
  return (
    <div>
      <h1 className='italic text-3xl '>Total review: {review.length}</h1>
      <div className="mt-12 lg:mt-24 grid lg:grid-cols-3 gap-10 md:grid-cols-2 lg:mx-14 mx-8 mb-20 ">
         {
        review.map(review => <SingleReview
          key={review.id}
          review={review}
        />
        )
      }
     </div>
    </div>
  );
};

export default Review;