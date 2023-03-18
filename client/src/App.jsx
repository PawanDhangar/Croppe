import { Route, Routes, Navigate } from "react-router-dom";
import './App.css'
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
    const user = localStorage.getItem("token");
    return (
        <Routes>
            {<Route path="/" exact element={<Home />} />}
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
        </Routes>

    );
}

export default App;
