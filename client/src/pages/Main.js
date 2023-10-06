import React, { Suspense, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SuspenseLoader from "../components/common/SuspenseLoader";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const toggleDrawer = () => {
    setOpenDrawer((openDrawer) => !openDrawer);
  };
  return (
    <>
      <>
        <Header toggleDrawer={toggleDrawer} />
        <Box>
          <SideBar openDrawer={openDrawer} />
          <Suspense fallback={<SuspenseLoader />}>
            <Outlet context={{openDrawer}} />
          </Suspense>
        </Box>
      </>
    </>
  );
};

export default Main;
