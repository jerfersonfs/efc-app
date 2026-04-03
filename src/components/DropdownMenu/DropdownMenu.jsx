import { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  Divider
} from "@mui/material";

import { Link } from "react-router-dom";

export default function DropdownMenu({ trigger, menuLabel, headerContent, items = [], width = 260}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* TRIGGER */}
      <Button
        onClick={handleOpen}
        sx={{
          minWidth: 0,
          width: 42,
          height: 42,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          color: "#fff",
          fontWeight: 700,

          "&:hover": {
            backgroundColor: "primary.dark"
          }
        }}
      >
        {trigger}
      </Button>

      {/* MENU */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width,
            borderRadius: "12px",
            mt: 1,
            border: "1px solid",
            borderColor: "divider",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
          }
        }}
      >
        {/* HEADER */}
        {headerContent && (
          <Box sx={{ px: 2, py: 1.5 }}>
            {headerContent}
            <Divider sx={{ mt: 1 }} />
          </Box>
        )}

        {/* ITEMS */}
        {items.map((item) => {
          const content = (
            <Typography sx={{ fontSize: "0.9rem" }}>
              {item.label}
            </Typography>
          );
          {/* LINKS */}
          if (item.to) {
            return (
              <MenuItem
                key={item.id ?? item.label}
                component={Link}
                to={item.to}
                onClick={handleClose}
              >
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={item.id ?? item.label}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                if(item.onClick){
                  item.onClick();
                }
                handleClose();
              }}
            >
              {content}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}