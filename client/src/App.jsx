import { Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Crops from "./Components/crops";

function App() {
    const user = localStorage.getItem("token");
    return (
        <Routes>
            {<Route path="/" exact element={<Home />} />}
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/crop" exact element={<Crops />} />
        </Routes>

    );
}

export default App;
