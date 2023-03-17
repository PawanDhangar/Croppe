import React from 'react';

const About = () => {
  return (
<div className=" bg-gray-100 grid lg:grid-cols-2">
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className=" px-4 py-8 w-full md:w-full sm:text-center lg:text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className=" text-lg text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit tellus eget suscipit aliquam. Donec vitae elit quis tellus finibus pretium.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sapiente sunt repellendus provident tenetur maxime molestias dolores at excepturi facere. Omnis perferendis quis optio voluptatum eum laudantium. Qui, provident. Quidem.
          </p>
        </div>
        <div className="w-full md:w-full mt-6 md:mt-0 flex justify-end object-cover object-center">
        <img class="mt-6  shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                    src="/home.jpg" alt="Farmer working in the Farm"/> </div>
      </div>
    </div>

<div class="hidden relative lg:block ">
<img class="absolute inset-0 w-96 left-56 h-60 top-10 bottom-10 object-center rounded-full" src="/home.jpg"
    alt="Farmer workin in the field"/> 

 </div>
</div>
  );
};

export default About;
