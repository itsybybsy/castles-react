import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import TeaImg from "./images/teatime.jpg";
import Ethicimg from "./images/ethics.jpg";


// Event Cards component, two cards next each other img + text with link 
// use for an new events news / options 
// cardMedia (img), CardContent for typography and cardaction for btn link

export default function EventsCards() {
    return (

    <Grid container spacing={2} justifyContent="center" sx={{my:6}}>
        <Grid item xs={12} sm={12} md={6} sx={{width: "45%"}}>
            <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'background.default'}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                    <Box sx={{width: "50%"}}>
                        <CardMedia
                        sx={{ height: 300 }}
                        image={TeaImg}
                        title="Tea Time"
                        />
                    </Box>
                    <Box sx={{width: "50%"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                            Tea at four
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Unforgettable afternoons with tea and history.
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button
                                size="large"
                                sx={{
                                    color: 'text.secondary',
                                    textTransform: 'none',
                                    px: 1.5,
                                    ':hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                                >
                                    Learn More
                            </Button>
                        </CardActions>
                    </Box>
                </Box>
            </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} sx={{width: "45%"}}>
            <Card sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'background.default'}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                    <Box sx={{width: "50%"}}>
                        <CardMedia
                        sx={{ height: 300 }}
                        image={Ethicimg}
                        title=" Aesthetics and Ethics"
                        />
                    </Box>
                    <Box sx={{width: "50%"}}>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="div">
                            Aesthetics & Ethics
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Aesthetics and ethics in romantic attire.
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button
                                size="large"
                                sx={{
                                    color: 'text.secondary',
                                    textTransform: 'none',
                                    px: 1.5,
                                    ':hover': {
                                        textDecoration: 'underline',
                                    },
                                }}
                                >
                                    Learn More
                            </Button>
                        </CardActions>
                    </Box>
                </Box>
            </Card>
        </Grid>
    </Grid>
    );
  }
