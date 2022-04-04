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
          <p className="text-left text-lg mb-6 text-justify">In programming, Semantics refers to the meaning of a piece of code. Semantic HTML5 addresses this shortcoming by defining specific tags to clearly indicate what role the content these tags play. This explicit information helps robots / crawlers like Google to better understand which content is important, which is a subsidiary, which is navigation and so on. For blind or visually impaired users who rely on screen readers to verbally describe what is on a page, proper use of HTML5 semantic elements will allow screen readers to communicate their content more accurately, making the visual audible. It is essential to adopt this latest version of HTML so that you can make your content accessible to all possible site visitors. Examples of semantic tags are: header, nav, footer, main, section. </p>
  </div>
        <div className=' bg-violet-200 rounded p-5 mb-4' >
          <h1 className="text-left text-3xl font-semibold mb-4  "> Question 3: Difference between inline, block & inline-block element?</h1>
        <p className="text-left text-lg mb-6 text-justify"> There is three display properties : <strong>inline, block ,inline-block</strong>. <strong>Block: </strong>It occupies the entire horizontal space of its parent element. Always start on a new line.<strong> Inline: </strong> Does not start on a new line, its width and height are determined by the content and not affected by width, height, margin-top, margin-bottom properties. Affected by horizontal padding and margin. Affected by padding-top and padding-bottom, but only visually. Other elements will not respect the vertical paddings. <strong>Inline-block: </strong> an inline element that respects margin, width and height. </p>
  </div>
  </div>
  );
};

export default Blog;