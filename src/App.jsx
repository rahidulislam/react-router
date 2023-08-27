import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Blog from "./pages/Blog";
import User from "./pages/User";
import Protected from "./pages/Protected";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <BrowserRouter>
            <Navbar />
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blogs" element={<Protected isLoggedIn={isLoggedIn}><Blogs /></Protected>} />
                <Route path="/blogs/:title" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
