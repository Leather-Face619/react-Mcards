import React from 'react'
import { Button} from '@mui/material';
const LearnBtn = ({mov}) => {
    const handleLearn = (pro) => {
        window.open(`https://en.wikipedia.org/wiki/${pro}`)

      }
  return (
    <Button size="small" onClick={() => {
        handleLearn(mov.title)
      }} color="primary" style={{ position: 'absolute', right: '10px', textTransform: 'capitalize' }} >
        Learn more....
      </Button>
  )
}

export default LearnBtn

export const DownBtn = ({mov}) => {

  const handleDownload = (mo) => {
    const link = document.createElement('a');
    link.href = 'path/to/your/video.mp4';
    link.download = `${mo}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Button size="small" onClick={() => {
        handleDownload(mov.title)
      }} color="primary">
        Download
      </Button>
  )
}

