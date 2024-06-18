import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import mov from "../topMov.json"
import Navi from '../Components/Nav';
import ScrollButton from '../Components/Scrollbtn';
import LearnBtn, { DownBtn } from '../Components/BtnHandler';

export default function MultiActionAreaCard() {
  return (
    <>
      <Navi />
      {
        mov.map((movie, i) => {
         
          
          return (
            <Box key={i} sx={{ display: ' inline-block', gap: "30px", margin: '10px', verticalAlign: 'top' }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={movie.thumbnail_height}
                    width={movie.thumbnail_width}
                    image={movie.thumbnail}
                  />
                  <CardContent>
                    <Typography style={{
                      position: 'relative'
                    }} gutterBottom variant="h5" component="div">
                      {movie.title}
                      <b style={{ fontSize: '1.5vw', position: 'absolute', right: '10px', top: '0' }}>{movie.year}</b>
                    </Typography>
                    <Typography>
                      {/* <h5>
                     IMDb Rating:  
                     <b style={{marginLeft:'5px', borderRadius:'20px',padding:'.2vw 1vw ',backgroundColor: movie.imdbRating > 5 ?  'green' : '#a11414' }}>
                       {movie.imdbRating}
                     </b>
                   </h5> */}

                    </Typography>
                    <Typography variant="body2" color="text.secondary" >
                      {movie.extract}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ position: 'relative' }}>
                  <DownBtn mov={movie}/>
                  <LearnBtn mov={movie}/>
                </CardActions>
              </Card>
            </Box>
          )
        })}
      <ScrollButton />
    </>


  );
}