import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions } from '@mui/material';
import mov from "../mov.json"
import LearnBtn,{DownBtn} from './BtnHandler';

export default function MultiActionAreaCard() {
  return (
    mov.map((movie,i) => {
     
      return (
        <Box key={i} sx={{ display: ' inline-block', gap: "30px", margin: '10px', verticalAlign: 'top' }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="350"
                image={movie.posterurl}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <b style={{ position: 'absolute', right: '10px' }}>{movie.year}</b>
                <Typography>
                  <h5>
                    IMDb Rating:  
                    <b style={{marginLeft:'5px', borderRadius:'20px',padding:'.2vw 1vw ',backgroundColor: movie.imdbRating > 5 ?  'green' : '#a11414'}}>
                      {movie.imdbRating}
                    </b>
                  </h5>

                </Typography>
                <Typography variant="body2" color="text.secondary" >
                  {movie.storyline}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{position:'relative'}}>
              <DownBtn mov={movie}/>
              <LearnBtn mov={movie}/>
            </CardActions>
          </Card>
        </Box>
      )
    })

  );
}