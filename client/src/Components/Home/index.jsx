import React from 'react'

import Navbar from '../navbar'
import MainPage from '../mainpage'
import Footer from '../footer'
import Service from '../service'
import About from '../about'
import Crops from '../crops'
// import Contact from '../Contact'

const Home = () => {
    return (
        <div>            
            <MainPage />
            <Service />
            <About />
            <Footer />
        </div>
    )
}

export default Home;
