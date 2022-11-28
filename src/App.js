import "./App.css";
import Registration from "./components/Registration.js";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";
import Header from "./components/Header";
import Home from "./components/Home";
import QuestionDetail from "./components/QuestionDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material";
import QuestionList from "./components/QuestionList";
import { useEffect, useState } from "react";
import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";

function App() {
    // const theme = createTheme({
    //   spacing: 4,
    // });

    // theme.spacing(8);


    return (
        <BrowserRouter>
            {/* <Navbar handleLogout={handleLogout} /> */}
            <Header />
            <Routes>
                <Route path="Registration" element={<Registration />} />
                <Route path="Login" element={<Login />} />
                <Route path="Profile" element={<Profile />} />
                <Route path="Favorites" element={<Favorites />} />
                <Route path="Home" element={<Home />} />
                <Route path="Question/:id" element={<QuestionDetail />} />
                <Route path="/" element={<QuestionList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
