import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <Box
        sx={{
          flexGrow: 1,
          transition: "all 0.3s ease",
          ml: sidebarOpen ? "220px" : "72px",
          p: 3
        }}
      >
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
}