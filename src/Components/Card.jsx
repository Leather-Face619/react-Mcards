import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Box, Button, CardActionArea, CardActions } from '@mui/material';
import mov from "../mov.json"

export default function MultiActionAreaCard() {
  return ( 
    mov.map((movies)=>{
        return(
            <Box sx={{ display:' inline-block',  gap:"30px",  margin: '10px',verticalAlign: 'top' }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
          image={movies.posterurl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movies.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movies.storyline}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    

    {/* Add more Card components as needed */}
  </Box>
        )
    })
    
  );
}