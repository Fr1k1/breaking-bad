import { Route, Routes } from "react-router";
import Login from "./Pages/Login/Login";
import "./index.css";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
