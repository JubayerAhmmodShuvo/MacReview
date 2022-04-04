import { useEffect, useState } from "react";

const UserReview = () => { 
  const [review, setReview] = useState([]);
  console.log(review);
  useEffect(() => {
    fetch('review.json')
      .then(res => res.json())
      .then(data => setReview(data))
  }, []);
  return [review, setReview];

}

export default UserReview;