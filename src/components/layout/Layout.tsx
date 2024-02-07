import { Outlet } from "react-router-dom";
import Header from "../header/Header";

import { SpeedInsights } from "@vercel/speed-insights/react"

const Layout = () => {
  return (
    <>
      <Header />
      <>
        <Outlet />
      </>
      {/* speedtest */}
      <SpeedInsights/>
    </>
  );
};

export default Layout;
