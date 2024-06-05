import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from '../../components/Sidebar';

function Layout() {

  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [sidebarWidth, setSidebarWidth] = useState("240px");
  const [activeItemName, setActiveItemName] = useState("Dashboard");

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        isNonMobile={isNonMobile}
        sidebarWidth={sidebarWidth}
        setSidebarWidth={setSidebarWidth}
        setActiveItemName={setActiveItemName}
      />
      <Box flexGrow={1} pt={{ xs: 7, sm: 8 }}>
        <Navbar
          sidebarWidth={sidebarWidth}
          setSidebarWidth={setSidebarWidth}
          activeItemName={activeItemName}
        />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout