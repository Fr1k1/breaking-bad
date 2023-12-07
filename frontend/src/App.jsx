import { Route, Routes } from "react-router";
import Login from "./Pages/Login/Login";
import "./index.css";
import Register from "./Pages/Register/Register";
import Profile from "./Pages/Profile/Profile";
import Homepage from "./Pages/Homepage/Homepage";
import MainLayout from "./Components/MainLayout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
