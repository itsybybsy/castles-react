import { Box, Button, Link, Grid } from "@mui/material";

// List of castle objects with their names and links
const topCastles = [
    { name: "Bojnice Castle", link: "/castle1" },
    { name: "Spiš Castle", link: "/castle2" },
    { name: "Bratislava Castle", link: "/castle3" },
    { name: "Orava Castle", link: "/castle4" },
    { name: "Strečno Castle", link: "/castle5" },
    { name: "Red Stone Castle", link: "/castle5" },
    { name: "Čachtice Castle", link: "/castle5" },
    { name: "Betliar Manor", link: "/castle5" },
    { name: "Devín Castle", link: "/castle5" },
    { name: "Nitra Castle", link: "/castle5" },
  ];
  
  // Hero Link component, buttons alike Links use for "futere" as redirection Links to subpage (article) about each Castle

  export default function HeroLinks() {
    return (
        // help with Chatgbt the map function instead of weritting each button for 10 castles
        <Box sx={{ width: "100%", display:"flex", justifyContent: "center", my:6, px: { xs: 4, md: 8 } }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center"
          sx={{ width: "80%"}}> {/* Fixed width 80% that 10 btn in two rows */}
          {topCastles.map((castle, index) => (
            <Grid item xs={12} sm={6} md={3} key={castle.link}>
              <Button
                size="large"
                variant="contained"
                component={Link}
                to={castle.link}
                sx={{ 
                  py: 2, 
                  width: "200px",
                  boxShadow: 'none',
                  border: '1px solid #D5C2B3',
                  ':hover': {
                    backgroundColor: 'background.default',
                  }
                }}
              > 
                {/* Displays the castle number and name */}
                {index + 1}. {castle.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
}


