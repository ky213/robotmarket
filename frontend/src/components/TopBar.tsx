import React, { PropsWithChildren, useState } from "react";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { RootState } from "store/models/redux.model";

export default function MenuAppBar(props: PropsWithChildren) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { items, total } = useSelector((state: RootState) => state.cart);

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
              onClick={() => setMenuOpen(true)}
              color="inherit"
            >
              <Badge badgeContent={items.reduce((sum, item) => sum + item.amount, 0)} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Paper sx={{ maxWidth: "100%" }}>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                PaperProps={{
                  style: {
                    width: '500px',
                  },
                }}
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
              >
                <MenuItem>Total Robots: {items.reduce((sum, item) => sum + item.amount, 0)}</MenuItem>
                <MenuItem>Total Price: LKR {total.toLocaleString()}</MenuItem>
              </Menu>
            </Paper>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
