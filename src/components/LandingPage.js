import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// just my landing page with a Header 1 and 
// styles for welcome page in app.css hero class - bg image etc.

function LandingPage() {

   return (
      <>
         <Box className="hero">
            <Typography className="h1" variant="h1" component="h1">
               Slovakia Castles
            </Typography>
         </Box>

      </>
   );
}

  export default LandingPage;
  