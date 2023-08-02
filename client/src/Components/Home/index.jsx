import React from 'react'

import Navbar from '../navbar'
import MainPage from '../mainpage'
import Footer from '../footer'
import Service from '../service'
import About from '../about'
import Crops from '../crops'
// import Contact from '../Contact'

const home = () => {
    return (
        <div>            
            <MainPage />
            <Service />
            <Crops />
            <About />
            <Footer />
        </div>
    )
}

export default home
