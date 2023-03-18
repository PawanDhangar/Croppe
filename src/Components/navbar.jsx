import { useState } from 'react'
import React from "react";

 const Navigation = () =>{

  const [isVisible, setIsVisible] = useState(false);
  
    function toggleVisibility() {
      setIsVisible(!isVisible);
    }

    const handleScroll = (event, id) => {
      event.preventDefault();
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
    return (
      <div className="App">  
 <nav className=" fixed z-10 w-full bg-white border-gray-200 px-2 sm:px-4 py-1.5 justify-items-end dark:bg-gray-600 ">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
  <a href="#" onClick={(e) => handleScroll(e, 'home')} class="flex items-center">
      <img src="/logo.svg" class="h-6 mr-3 sm:h-9" alt="CropPe Logo" />
      <span class="self-center text-2xl font-bold whitespace-nowrap dark:text-white">CropPe</span>
  </a>
  <div class="flex md:order-2 space-x-3">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:-translate-y-0.5 transform transition sm:hover:bg-green-500">Log In</button>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:-translate-y-0.5 transform transition sm:hover:bg-green-500">Sign Up</button>
    
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 
      text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
      focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={isVisible?'true':'false'} onClick={toggleVisibility}>
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div className={`items-center md:justify-end md:flex-grow justify-between w-full md:flex md:w-auto md:order-1 ${isVisible?'':'hidden'}`} id="navbar-cta">
    <ul class="flex flex-col p-4 m-2 border md:mr-2 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-500">
      <li>
        <a href="/" class="block text-xl py-2 pl-4 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:font-bold md:p-0 dark:text-white" aria-current="page" onClick={(e) => handleScroll(e, 'home')}>Home</a>
      </li>
      <li>
        <a href="/Services" class="block text-xl py-2 pl-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0 md:dark:hover:text-blue dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " onClick={(e) => handleScroll(e, 'services')}>Services</a>
      </li>
      <li>
        <a href="/About" class="block text-xl py-2 pl-4 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent " onClick={(e) => handleScroll(e, 'about')} >About</a>
      </li>
      <li>
        <a href="/Contact" class="block text-xl py-2 pl-4 pr-4  text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

      </div>  
      
      
    );
  }
  
  export default  Navigation;