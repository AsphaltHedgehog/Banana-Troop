import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
    </>
  );
};

export default Layout;
