import React from "react"
import { Link } from 'react-router-dom';
import MainMenu from "../MainMenu"
import {BrowserRouter as Router} from 'react-router-dom';
import { Grid } from "@mui/material";


export const CarInsurance =()=>
    {
        return (
                <><MainMenu /><br></br><br></br>

                <h1>MOTOR VEHICLE PRODUCTS</h1>
                <br></br><br></br>
                
                <img src={require('/Users/nmwenjwa/Desktop/FULLBLOOM - Part 2/src/images/cars.gif')} alt="my-gif" />
                
                <p><strong>Giving you the best service with the best company providers in East Africa!</strong></p>
                
                <p>Below are some motor vehicle Insurance Providers! Look around, give us a call and we'll sort you out!</p>
                <a className="Products" href="https://www.aig.com/pcg/offerings/automobile/auto-highlights" />
                
                <br></br><br></br>
            <Grid container spacing={20} alignItems="center" justifyContent="space-around" direction="row" alignContent="center">
                <Grid item md={4}>
                    <a href="https://jubileeinsurance.com/ke/">
                        <img src={require("/Users/nmwenjwa/Desktop/FULLBLOOM - Part 2/src/images/jubilee.png")} alt="example" />    
                    </a>
                </Grid>
                <Grid item md={4}>
                    <a href="https://www.aig.com/pcg">
                        <img src={require("/Users/nmwenjwa/Desktop/FULLBLOOM - Part 2/src/images/aig.png")} alt="example" />    
                    </a>
                </Grid>
                <Grid item md={4}>
                    <a href="https://cic.co.ke/">
                        <img src={require("/Users/nmwenjwa/Desktop/FULLBLOOM - Part 2/src/images/cic.png")} alt="example" />    
                    </a>
                </Grid>
            </Grid></>                     
        )
    }
