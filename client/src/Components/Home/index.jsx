import React from 'react'

import Navbar from '../navbar'
import MainPage from '../mainpage'
import Footer from '../footer'
import Service from '../service'
import About from '../about'
import Crops from '../crops'
import Contact from '../contact'

const Home = () => {
    return (
        <div>
            <Navbar />
            <MainPage />
            <Service />
            <About />
            <Contact/>
            <Footer />
        </div>
    )
}

export default Home;
