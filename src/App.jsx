import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
import {Navigation,Footer, About,Contact, Services,Home} from './Components';
import CardForm from './Components/Crops';


function App() {
  return (
   <div>
    <div>
    <Navigation/>
   </div>
   <div>
    <Home/>
   </div>
   <div>
    <Services/>
   </div>
   <div>
    <About/>
   </div>
   <div>
    <Contact/>
   </div>
   <div>
    <Footer/>
   </div>
   <div>
    <CardForm/>
   </div>
   </div>

  );
}


export default App;
