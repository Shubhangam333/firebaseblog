import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import MainWrapper from "../assets/wrappers/MainWrapper";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  );
};

export default Layout;
