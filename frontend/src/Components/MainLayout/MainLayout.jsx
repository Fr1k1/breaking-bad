import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="dashboard-layout-wrapper">
      <div className="main-section">
        <Navbar />

        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
