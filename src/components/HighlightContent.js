import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// Full-width highlight cards (e.g. garden, cave, etc.).
// Each card displays an image as the background, plus a title and short description.
// The HighlightContent component uses props (image, title, description) 
// that are passed from App.js, making the content easy to update in one place.
// In short: flexible section cards where all text and images can be changed via props.

function HighlightContent({ image, title, description }) {

    return (

      <Box
         sx={{
            width: "100%",           
            display: "flex",
            justifyContent: "center",
            my: 6,  // I am using margin top/bottom 6 in all project
            py: 6,                 
            px: { xs: 4, md: 8 }, // left right padding small resolution 4, medium 8
            backgroundColor: "#F7F2ED"             
         }}
      >
      
      <Card sx={{ width: "100%", margin: "auto", borderRadius: 2 }}>
         <CardActionArea
            sx={{
               height: 300,
               display: "flex",                  
               justifyContent: "center",         
               alignItems: "center",             
               color: "#F7F2ED",
               textAlign: "center",
               backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${image})`, // give a small overlay over img to be less bright
               backgroundSize: "cover",
               backgroundPosition: "center",
               transition: "transform 0.3s ease",
               "&:hover": {
                  transform: "scale(1.02)",       
               },
            }}
         >
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {title}
          </Typography>
          <Typography sx={{fontSize: "22px", fontWeight: 300}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>    

    </Box>
  );
}
  
  export default HighlightContent;
  