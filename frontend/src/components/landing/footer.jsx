import React from 'react';
import { createUseStyles } from "react-jss";

export default function Footer(){
   const classes = useStyles({})
   return (
      <div className={classes.container}>
         <div className={classes.gradientText}>
         <a className={classes.link} href="https://www.linkedin.com/in/omar-hernandez-550a4375/"> 
            <i class="fab fa-linkedin"></i>
         </a>
         <a href="https://github.com/Boosqua" className={classes.link}> 
            <i class="fab fa-github-square"></i>
         </a>
         <a href="https://angel.co/u/omar-hernandez-19" className={classes.link}> 
            <i class="fab fa-angellist"></i>
         </a>
         </div>
      </div>
   )
}

const useStyles = createUseStyles({
   container: {
      width: '100vw',
      display: 'flex',
      height: 100,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
   },
   link: {
      fontSize: 30,
      margin: ".75em"
   },
   gradientText: {
      background: "linear-gradient(0.25turn, #e27d5e, #c48c9d, #c48c9d)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      backgroundSize: "200%",
      backgroundClip: "text",
      backgroundFillColor: "transparent",
      animation: "$slow 2s linear infinite",
   },
   "@keyframes slow":{
             "to": {
               backgroundPosition: "200% center"
            }
      },
})