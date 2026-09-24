import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import LogoImg from "./images/logo_name.png";

// Responsive App Bar from MUI library, 
// Navigation is edited a bit more in seperate css file header.css

const pages = ["About", "10 Best Castles", "History"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl" className="mainNav">
        <Toolbar disableGutters sx={{ display: "flex", alignItems: "center" }}>

          {/* Logo on the left */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }} className="logo">
            <img 
              src={LogoImg}
              alt="Logo" 
              style={{ height: 100}}
            />
          </Box>

          {/* Centered Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Button key={page} className="mainNavLink" sx={{ color: "inherit", mx: 1 }}>
                {page}
              </Button>
            ))}
          </Box>

          {/* Right side: Search (desktop only) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <IconButton
              size="small"
              onClick={() => setSearchOpen((prev) => !prev)}
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            {searchOpen && (
              <InputBase
                placeholder="Search…"
                sx={{
                  ml: 1,
                  color: "inherit",
                  borderBottom: "1px solid white",
                  width: "150px",
                }}
              />
            )}
          </Box>

          {/* Mobile Hamburger Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              aria-label="open navigation menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
