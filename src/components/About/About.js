import React from 'react';

const About = () => {
  return (
    <div className=" lg:mx-20 mx-6">
      <h1 className="text-2xl text-left font-semibold" >Here a short description about this web application:</h1>
      <ul className="list-disc lg: mx-20 mx-8 mt-8 text-lg ">
        <li className="text-left mb-6">In home page you can see product and its review. </li>
        <li className="text-left mb-6"> In review page you can see all the reviews </li>
        <li className="text-left mb-6">In dashboard page you can see products different chart. </li>
        <li className="text-left mb-6">In blog page there is several questions answered. </li>
        <li className="text-left mb-6">There's also a 404 not found error showed. </li>

      </ul>
 </div>
  );
};

export default About;