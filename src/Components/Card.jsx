import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import mov from "../mov.json"

export default function MultiActionAreaCard() {

  return (
    mov.map((movie) => {
      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'path/to/your/video.mp4';
        link.download = `${movie.title}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      return (
        <Box sx={{ display: ' inline-block', gap: "30px", margin: '10px', verticalAlign: 'top' }}>
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
                  <h5>imdb Rating: <b>{movie.imdbRating}</b></h5>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {movie.storyline}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="mediun" onClick={handleDownload} color="primary">
                Download
              </Button>
            </CardActions>
          </Card>
        </Box>
      )
    })

  );
}