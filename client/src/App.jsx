import React from 'react';
import './App.css'
<<<<<<< HEAD
import MyRoutes from './Components/MyRoutes';
=======
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Crops from "./Components/crops";
>>>>>>> c95893844e49f4b64423219109a0f4cce9b2ded4

function App() {
    // const user = localStorage.getItem("token");
    return (
<<<<<<< HEAD
        <MyRoutes/>
=======
        <Routes>
            {<Route path="/" exact element={<Home />} />}
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/crop" exact element={<Crops />} />
        </Routes>

>>>>>>> c95893844e49f4b64423219109a0f4cce9b2ded4
    );
}

export default App;
