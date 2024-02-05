import { Outlet } from 'react-router-dom';

import { SpeedInsights } from "@vercel/speed-insights/react"

const Layout = () => {
  return (
    <>
      {/* <Header/> */}
      <>
        <Outlet />
      </>
      {/* speedtest */}
      <SpeedInsights/>
    </>
  );
};


export default Layout;