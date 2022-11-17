import './App.css';
import Registration from "./components/Registration.js"
import Login from "./components/Login";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import QuestionDetail from "./components/QuestionDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    {/* <Navbar handleLogout={handleLogout} /> */}
      <Routes>
        <Route path="Registration" element={<Registration/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="Favorites" element={<Favorites/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="QuestionDetail" element={<QuestionDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
