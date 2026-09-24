import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import LogoImg from "../images/logo_name.png"; 

// Simple Footer with Link, Logo and Copyright

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: "#D5C2B3", p: 6}}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems={{ xs: "center", md: "flex-start" }} justifyContent={{ xs: "center", md: "space-between" }} >
 
          <Grid item xs={12} md={8}>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Typography variant="h5" color="#F7F2ED" gutterBottom>
                  Pages
                </Typography>
                <Link href="/about" display="block" underline="hover" color="white">
                  About
                </Link>
                <Link href="/castles" display="block" underline="hover" color="white">
                  Top Castles
                </Link>
                <Link href="/history" display="block" underline="hover" color="white">
                  History
                </Link>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" color="#F7F2ED" gutterBottom>
                  More
                </Typography>
                <Link href="/contact" display="block" underline="hover" color="white">
                  Contact
                </Link>
                <Link href="/blog" display="block" underline="hover" color="white">
                  Blog
                </Link>
                <Link href="/faq" display="block" underline="hover" color="white">
                  FAQ
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Logo on right side */}
          <Grid item xs={12} md={4} display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
            <Box
              component="img"
              src={LogoImg}
              alt="Logo"
              sx={{ maxHeight: 160 }}
            />
          </Grid>
        </Grid>

        {/* Copyright line */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="white">
            &copy; {new Date().getFullYear()} Barbora Mazuchova
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
