import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/wholeComponent/Header";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Slide, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { LayoutWrapper } from "./Layout.styled";

const Layout = () => {
  const [bgImg, setBgImg] = useState<boolean>(false);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    switch (currentPath) {
      case "/":
      case "/auth/login":
      case "/auth/register":
      case "/auth/restorePassword":
        setBgImg(true);
        return;
      default:
        setBgImg(false);
    }
  }, [currentPath]);

  return (
    <LayoutWrapper $bgImg={bgImg}>
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
        theme="dark"
        transition={Slide}
      />
      <Header />

      <main>
        <Outlet />
      </main>

      {/* speedtest */}
      <SpeedInsights />
    </LayoutWrapper>
  );
};

export default Layout;
