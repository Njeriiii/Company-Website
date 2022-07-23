import React from "react"
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { render } from "react-dom";
import "../App.css";


import Grid from "@material-ui/core/Grid";
import MainMenu from "./MainMenu";
import CarCards from './Cards/CarCards';
import HomeCards from './Cards/HomeCards';
import GeneralCard from './Cards/GeneralCard';

export const LandingPage = () =>

    {
return (    
    <div className="App"> 
        <MainMenu/>
        <p>
            <br></br>
            <br></br>
            <br></br>

        </p>
        <Grid container spacing={20} alignItems="center" justifyContent="space-around" direction="row" alignContent="center">
        <Grid item md={3}>
            <CarCards />
        </Grid>
        <Grid item md={3}>
            <HomeCards />
        </Grid>
        <Grid item md={3}>
            <GeneralCard />
        </Grid>
        </Grid>
        <br></br>
        <br></br>
        <br></br>
        <img src={require('/Users/nmwenjwa/Desktop/FULLBLOOM - Part 2/src/images/insurance.gif')} alt="my-gif" />
    </div>)
        }


// <Grid container spacing={2}>
//   <Grid item xs={8}>
//     <Item>xs=8</Item>
//   </Grid>
//   <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid item xs={4}>
//     <Item>xs=4</Item>
//   </Grid>
//   <Grid item xs={8}>
//     <Item>xs=8</Item>
//   </Grid>
// </Grid>