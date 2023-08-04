import { useState } from 'react'
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="App">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-1.5  dark:bg-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CropPe</span>
          </a>
          <div className="flex md:order-2 space-x-3">
            <Link to="/login">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
            </Link>
            <Link to="/signup">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
            </Link>

            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 
      text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none 
      focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={isVisible ? 'true' : 'false'} onClick={toggleVisibility}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isVisible ? '' : 'hidden'}`} id="navbar-cta">
            <ul className="flex flex-col p-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-600 md:dark:bg-gray-600 dark:border-gray-500">        
           
            <Link
            to="/crop"
            smooth={true}
            duration={500}>
              <li>
                <a  className="block text-xl py-2 pl-4pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              </Link>

            <Link
            to="/about"
            smooth={true}
            duration={500} >
              <li>
                <a href="#" className="block  text-xl py-2 pl-4 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              </Link>

            <Link
            to="/service"
            smooth={true}
            duration={500}>
              <li>
                <a href="#" className="block text-xl py-2 pl-4 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
          </Link>

            <Link
            to="/contact"
            smooth={true}
            duration={500}>
              <li>
                <a href="#" className="block text-xl py-2 pl- 4pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li> 
              </Link>

            </ul>
          </div>
        </div>
      </nav>

    </div>


  );
}

export default Navbar;