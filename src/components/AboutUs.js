import { Link } from 'react-router-dom';
import MainMenu from "./MainMenu";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export const AboutUs = () =>
    {
        return(
                
                <><MainMenu />
                <br></br><br></br>
                <h2 id="PageHeading">ABOUT US</h2><br></br>
                <h3>Who are we?</h3><br></br>
                <h3>What are our Values?</h3><br></br>
                <h3>We're a team of professionals dedicated to making your life easier!</h3><br></br>
                <Box sx={{ flexGrow: 1 }}>
                    <br></br>
                <Grid container spacing={1} alignItems="center" justifyContent="space-around" direction="row" alignContent="center">
                    <Grid item xs={2.5}>
                        <Item><br></br><br></br><strong>FOUNDING</strong><br></br>
                            Established in 2002, out of a vision to provide personalized service to Individuals,  Small and Medium sized insurance buyers who require a reliable intermediary with the capacity to accumulate intimate knowledge of the special needs of this sector.
                            <br></br><br></br><br></br></Item>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Item><strong>VISION</strong><br></br>To be the premier insurance agency with a strong reputation for quality client service and innovative insurance solutions.
                        </Item>
                    </Grid>
                    <Grid item xs={2.5}>
                        <Item>
                            <strong>CODE OF ETHICS</strong><br></br>
                            To adhere to professional standards of conduct in all our dealings with our clients.
                        </Item>
                    </Grid>
                </Grid>
            </Box></>
        )
}
                {/* <h3>INTRODUCTION</h3><p>
                    <strong>Fullbloom Insurance Agency Ltd.</strong> was established in 2002,
                    out of a vision to provide a personalized service to the Individual and
                    Small to Medium sized insurance buyer, who requires a reliable
                    intermediary with the capacity to accumulate intimate knowledge of the
                    special needs of this sector.<br /><br />
                    Over the years, we have developed long-term relationships with our
                    customers, and occupy the special position of their in-house insurance
                    managers, upon whom they can call for technical advice and support in all
                    their insurance requirements.
                </p><h3>VISION</h3><p>
                    To be the premier insurance agency with a strong reputation for quality
                    client service and innovative insurance solutions.
                </p><h3>CODE OF ETHICS</h3><ul>
                    <li>
                        To be the premier insurance agency with a strong reputation for quality
                        client service and innovative insurance solutions.
                    </li>
                    <li>
                        To adhere to professional standards of conduct in all our dealings with
                        our clients.
                    </li>
                    <li>To fulfill the needs of our clients to the best of our ability.</li>
                    <li>
                        To conduct our business so as to be judged above reproach by our
                        customers and the industry.
                    </li>
                </ul></>
            </div> */}
