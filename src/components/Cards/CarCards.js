import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BrowserRouter as Router, Switch, 
  Route,Routes, Redirect, viewBox, Link} from "react-router-dom";

import { carInsurance } from '../Major Types/CarInsurance';

export default function ActionAreaCard() {
  return (
    <Link to="/CarInsurance">
      <Card sx={{ maxWidth:345, paddingTop:'0%'}}>
        <CardActionArea>
          <CardMedia
            style= {{ height:200, paddingTop:'0%', display:'flex', justifyContent:'right'}}
            component="img"
            height="100 px"
            image={require ("/Users/nmwenjwa/Desktop/FULLBLOOM - Part 2/src/images/Various-Cars.jpg")}
            alt="Car Insurance"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Car Insurance
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

