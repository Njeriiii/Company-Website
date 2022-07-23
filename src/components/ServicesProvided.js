import {Link} from "react-router-dom";
import MainMenu from "./MainMenu";

// export const ServicesProvided =() =>
// {
//     return(
//         <div>
//             <MainMenu/>
//                 <h2 id="PageHeading">Services</h2>
//             <h4>OUR SERVICES:-</h4>
//             <ul>
//             <li>
//                 Helping our clients identify their needs and arranging appropriate
//                 covers
//             </li>
//             <li>
//                 Serving as an intermediary between our clients and the insurance company
//             </li>
//             <li>Providing claims assistance and facilitating prompt settlement</li>
//             <li>Constant review of covers to make sure that they are up to date</li>
//             </ul>
//             <p>
//             The policies would be placed with insurance companies of repute, with
//             sound financial security including management strength, positive attitude
//             towards claims and efficiency.
//             </p>

//             <h4>CLAIMS SERVICES:-</h4>
//             <p>
//             The ultimate deliverable from insurance purchase is the Fast and Equitable
//             Settlement of claims whenever insured risks manifest themselves in loss.
//             Due to the technical nature of the Claims Negotiation Process, our
//             customers rely on us to liaise with insurers in order to ensure that they
//             extract maximum value from the insurance process. <br /><br />
//             On our part, we leverage our wide knowledge and experience in the proper
//             and adequate documentation of claims, as well as our relationships with
//             our Business Partners, to ensure that claims that meet all the
//             requirements are settled without delay.
//             </p>

//             <h4> VALUE ADDITION</h4>
//             <p>
//                 Our business model and success has always been anchored in our ability 
//                 to give a value-adding service to our customers, and offering advice that 
//                 they would not usually get from the ordinary intermediary. In particular, 
//                 our clients benefit from our networks with specialized providers of risk 
//                 management services, which affords them to opportunity to buy insurance 
//                 and manage risk cost-effectively. <br/> <br/> 
//                 Management is the process in which a business identifies all the risks 
//                 that can affect its objectives, evaluates the impacts of these risks, 
//                 and determines the most economic method of bringing these under control 
//                 in order that may not unduly threaten business performance. <br/> <br/> 
//                 The process of buying insurance without undertaking a risk management 
//                 study may not result in the most efficient allocation of scarce resources, 
//                 and we support our customers' initiatives in this respect, to ensure that 
//                 insurance buying is directed where it would do the most good. <br/> <br/> 
//                 We also advise our customers that many losses results in costs that are not 
//                 recoverable from insurance, and it is therefore important that business makes 
//                 an effort at Accident Prevention in order to minimize adverse impacts upon their bottom lines.
//             </p>
//         </div>
//     )
// }




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

export default function ServicesProvided() {
  return (
        <><MainMenu background-color="red"/>
        
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1>SERVICES</h1>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={10} alignItems="center" justifyContent="space-around" direction="row" alignContent="center">
              <Grid item xs={2.5}>
                  <Item><strong>CONSULTATION</strong><br></br>Helping our clients identify their needs and arranging appropriate covers.</Item>
              </Grid>
              <Grid item xs={2.5}>
                  <Item><strong>CLAIMS</strong><br></br>Providing claims assistance and facilitating prompt settlement.</Item>
              </Grid>
              <Grid item xs={2.5}>
                  <Item><strong>RENEWALS</strong><br></br>Constant review of covers to make sure that they are up to date</Item>
              </Grid>
              <Grid item xs={2.5}>
                  <Item><strong>RISK ASSESMENT</strong><br></br>Undertake risk management studies for efficient use of resources.</Item>
              </Grid>
              <Grid item xs={4}>
                  <Item><strong>VALUE ADDITION</strong><br></br>We leverage our wide knowledge and experience in the proper
           and adequate documentation of claims, as well as our relationships with
           our Business Partners, to ensure quick and efficient service!</Item>
              </Grid>
          </Grid>
      </Box></>
  );
}
