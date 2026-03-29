import { Box,IconButton,Tooltip,Typography } from "@mui/material";
import IconLibary from "../IconLibary/IconLibary";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SIDEBAR_ROUTES } from "../../routes/routeConfig";

const iconMap = {
  dashboard: <IconLibary name="HomeTwoToneIcon"/>,
  finances: <IconLibary name="CurrencyExchangeTwoToneIcon"/>,
  tasks: <IconLibary name="TaskAltTwoToneIcon"/>,
  habits: <IconLibary name="TrendingUpTwoToneIcon"/>
};

export default function Sidebar({open,setOpen}) {

  return (
    <Box
      sx={{
        width: open ? 220 : 72,
        transition: "0.3s",
        position: "fixed",
        height: "100vh",
        backgroundColor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider"
      }}
    >
      {/* TOGGLE */}
      <IconButton onClick={() => setOpen(!open)}>
        <IconLibary name="MenuTwoToneIcon" />
      </IconButton>

      {/* LISTA */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {SIDEBAR_ROUTES.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <Tooltip title={!open ? item.label : ""} placement="right">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 1.2,
                    borderRadius: "10px",
                    cursor: "pointer",

                    backgroundColor: isActive
                      ? "action.selected"
                      : "transparent",

                    "&:hover": {
                      backgroundColor: "action.hover"
                    }
                  }}
                >
                  {/* ÍCONE */}
                  <Box sx={{ color: "text.primary" }}>
                    {iconMap[item.id]}
                  </Box>

                  {/* TEXTO */}
                  {open && (
                    <Typography
                      sx={{
                        fontSize: "0.9rem",
                        color: "text.primary"
                      }}
                    >
                      {item.label}
                    </Typography>
                  )}
                </Box>
              </Tooltip>
            )}
          </NavLink>
        ))}
      </Box>
    </Box>
  );
}