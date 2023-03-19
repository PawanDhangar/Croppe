import React from 'react';

const About = () => {
  return (
    
    <section className="About" id="about">
<div className="bg-gray-200 grid lg:grid-cols-2">
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className=" px-4 py-8 w-full md:w-full sm:text-center lg:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className=" text-lg text-gray-500 mt-8">
          Welcome to our platform for farmers!  Our platform provides a user-friendly interface for farmers to list their products
           and reach a wider audience. We understand that farming is hard work, and we want to make it easier for farmers to sell their 
           products without having to worry about and distribution.</p>

           <br />

        <p>For consumers, our website offers the convenience of being able to browse 
          and purchase a variety of fresh produce from local farmers. We believe in
           transparency and providing consumers with information about the farmers and their farming practices.
         </p>
        </div>
        <div className="w-full md:w-full mt-6 md:mt-0 flex justify-end object-cover object-center">
        <img class="mt-6  shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                    src="/about.jpg" alt="Farmer working in the Farm"/> </div>
      </div>
    </div>

<div class="hidden relative lg:block items-center ">
<img class=" absolute h-full object-cover object-center" src="/about.jpg"
    alt="Farmer workin in the field"/> 

 </div>
</div>
</section>
  );
};

export default About;
