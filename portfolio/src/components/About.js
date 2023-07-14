import React from "react";
import uiuc from "../images/uiuc_logo.png"
import jss from "../images/jss_logo.png"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const bull = (
   <Box
     component="span"
     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} >   
   </Box>
 );
 
 const card = (
   <React.Fragment>
     <CardContent>
       {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         Word of the Day
       </Typography> */}
       <Typography variant="h5" component="div">
         <b>
         Education
         </b>
       
       </Typography>
       <br />

  <div class="flex flex-row ...">
  <div><img width="50" height = "40" src={uiuc}/></div>
  <div class="pl-4 ...">
   <p><b>University of Illinois at Urbana-Champaign</b></p>
   <p class="text-sm ...">Master of Science - Information Management</p>
  </div>
</div>

<div class="flex flex-row ... pt-6 ...">
  <div><img width="60" height = "40" src={jss}/></div>
  <div class="pl-4 ...">
   <p><b>JSS Academy of Technical Education Noida</b></p>
   <p class="text-sm ...">Bachelor of Technology (B.Tech.) - Electronics and communication engineering</p>
  </div>
</div>

  
       {/* <Typography variant="body2">
         well meaning and kindly.
       </Typography> */}
       {/* <Typography variant="body2">
         well meaning and kindly.
         <br />
         {'"a benevolent smile"'}
       </Typography> */}
     </CardContent>
     <CardActions>
       {/* <Button size="small">Learn More</Button> */}
     </CardActions>
   </React.Fragment>
 );

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Shubhda.
            <br className="hidden lg:inline-block" />I love to build amazing web
            apps with delightful user experiences.
          </h1>
          <p className="mb-8 leading-relaxed">
            An adept front-end developer with 6+ years of industry experience who contributed to building dynamic user interfaces
            and web applications with Angular, React, Javascript, Typescript, HTML, Bootstrap and CSS. 
         Currently working at <a href="https://www.countryfinancial.com/" target="_blank" class="underline">Country Financial</a> as a Lead UI developer.
        
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined" >{card}</Card>
        </Box>
          {/* <img
            className="object-cover object-center rounded"
            alt="heroine"
            src={girl}
          /> */}
        </div>
      </div>
    </section>
  );
}