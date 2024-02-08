import { Outlet } from "react-router-dom";
import Header from "../header/wholeComponent/Header";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Slide, ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
      <Header />
      <>
        <Outlet />
      </>
      {/* speedtest */}
      <SpeedInsights />
    </>
  );
};

export default Layout;
