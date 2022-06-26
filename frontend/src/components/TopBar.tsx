import React, { PropsWithChildren } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function MenuAppBar(props: PropsWithChildren) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Robot Market
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="cart"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <ShoppingBasket />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={false}
              onClose={() => {}}
            >
              <MenuItem onClick={() => {}}>Profile</MenuItem>
              <MenuItem onClick={() => {}}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
