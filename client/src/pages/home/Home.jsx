import React from 'react'

const Home = () => {
  return (
    
        <div className=" bg-gray-100 grid lg:grid-cols-2">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0">
            <div classNam="xl:max-w-xl ">
                {/* <img class="h-10" src="/logo.svg" alt="Intro"/> */}
               <img className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
                    src="/home.jpg" alt="Farmer working in the Farm"/>
                   <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">You can
                    Sell your Crops
                    <br className="hidden lg:inline"/>
                    <span className="text-indigo-500"> Take
                        advantage of it.</span>
                </h1>
                <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit.
                    Deserunt iusto,
                    consequuntur dicta
                    eveniet, deleniti harum necessitatibus dolorum, vitae amet alias voluptates eum cupiditate earum
                    soluta
                    sapiente consectetur in illo nesciunt.</p>

                <div className="mt-4 space-x-3 sm:mt-6">
                    <a className ="btn btn-primary shadow-lg hover:-translate-y-0.5 transform transition" href="#"> Start Sell & Buy</a>
                    <a className ="btn btn-secondary" href="#">Learn more</a>
                </div>
            </div>
        </div>
        <div className="hidden relative lg:block">
            <img className="absolute inset-0 h-full object-cover object-center" src="/home.jpg"
                alt="Farmer workin in the field"/>

        </div>

    </div>
    
  )
}

export default Home
