import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { Outlet, useLocation} from "react-router-dom";
import { ROUTE_META } from "../routes/routeConfig";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();
  const meta = ROUTE_META[location.pathname] || {
    title: "",
    subtitle: "",
  }
  return (
    <Box sx={{ display: "flex" }}>
      
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <Box
        sx={{
    transition: "all 0.3s ease",
    ml: sidebarOpen ? "220px" : "72px",
    width: sidebarOpen ? "calc(100% - 220px)" : "calc(100% - 72px)",
    p: 3,
    overflowX: "hidden",
        }}
      >
        <Header
          title={meta.title}
          subtitle={meta.subtitle}
        />
        <Outlet />
      </Box>
    </Box>
  );
}