import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          style= {{ height:200, paddingTop:'0%', display:'flex', justifyContent:'right'}}
          component="img"
          height="100 px"
          image={require ("/Users/nmwenjwa/Desktop/FULLBLOOM - Part 2/src/images/general.jpg")}
          alt="General Insurance"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          General Insurance
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

