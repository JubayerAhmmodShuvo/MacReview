import React from 'react';

const Blog = () => {
  return (
      <div className="lg:m-20 m-4  ">
       <div className=' bg-violet-200 rounded p-5 mb-4' >
        <h1 className="text-left text-3xl font-semibold mb-4  "> Question 1: What is Contex API?</h1>
        <p className="text-left text-lg mb-6 text-justify ">Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is mainly used when you want simple state management and context makes you avoid props drilling. In Context, you make the parent component a provider and define the child as a consumer that directly uses props from the parent rather than the passing of props through each child component that leads up to the component where it is needed. The new Context API is made up of these three parts: <strong>  React.createContext, Provider, Consumer</strong>. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children, it will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
  </div>
       <div className=' bg-violet-200 rounded p-5 mb-4' >
        <h1 className="text-left text-3xl font-semibold mb-4  "> Question 2: What is Semantic Tag?</h1>
        <p className="text-left text-lg mb-6 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit officia tempore ipsam in asperiores dolorem rem possimus. Autem consectetur optio rerum est molestias ab soluta libero officia praesentium repudiandae.</p>
  </div>
       <div className=' bg-violet-200 rounded p-5 mb-4' >
        <h1 className="text-left text-3xl font-semibold mb-4  "> Question 3: Difference between inline block & inline block element?</h1>
        <p className="text-left text-lg mb-6 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit officia tempore ipsam in asperiores dolorem rem possimus. Autem consectetur optio rerum est molestias ab soluta libero officia praesentium repudiandae.</p>
  </div>
   </div>
  );
};

export default Blog;