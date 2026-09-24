import * as React from 'react';
import { Box, Grid, Typography } from "@mui/material";

// Reusable content section component.
// Receives data (image, title, description, etc.) as props from the parent (e.g. App.js).
// Layout and text can be easily changed by modifying the props.
// The 'reverse' prop optionally flips the layout (image on the right instead of left).
// The 'extraText' prop allows an optional second paragraph below the description.

export default function SideContent({
  image,
  title,
  description,
  extraText, // optional second paragraph
  reverse = false, // if true, image on the right
}) {
  return (
    <Box sx={{ px: { xs: 4, md: 8 }, my: 6 }}> {/* my top/bottom*/}
    <Grid container
      direction={reverse ? "row-reverse" : "row"}
      spacing={4}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          // border: '3px dashed purple',
        }}
    >

<Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "center" }}>
    <Box
      sx={{
        maxWidth: { xs: "100%", md: 400 },
      }}
    >
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      <Typography variant="body1">
        {extraText}
      </Typography>
    </Box>
    </Grid>   


    <Grid size={{ xs: 12, md: 8}} >
      <Box
            component="img"
            src={image}
            alt={title}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              boxShadow: 3,
              objectFit: "cover",
              // border: '3px dashed blue',
            }}
          >
       </Box>
      
      </Grid>   




    </Grid>

    </Box>

  );
}