import {
  Box,
  IconButton,
  Tooltip,
  Typography
} from "@mui/material";

import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import TaskAltTwoToneIcon from '@mui/icons-material/TaskAltTwoTone';
import TrendingUpTwoToneIcon from '@mui/icons-material/TrendingUpTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';


import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SIDEBAR_ROUTES } from "../../routes/routeConfig";

const iconMap = {
  dashboard: <HomeTwoToneIcon/>,
  finances: <CurrencyExchangeTwoToneIcon />,
  tasks: <TaskAltTwoToneIcon />,
  habits: <TrendingUpTwoToneIcon />
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        width: open ? 220 : 72,
        transition: "0.3s",
        height: "100%",
        backgroundColor: "background.paper",
        borderRight: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        p: 1
      }}
    >
      {/* TOGGLE */}
      <IconButton onClick={() => setOpen(!open)} sx={{ mb: 2 }}>
        <MenuTwoToneIcon />
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

export default Sidebar;