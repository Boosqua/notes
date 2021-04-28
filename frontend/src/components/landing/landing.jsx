import React, { useState } from "react"
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import image from "../../img/LOL.jpeg"
import clsx from "clsx";
//font-family: 'Oswald', sans-serif;
//filter: brightness(100%)
const useStyles = createUseStyles({
   //header
   header: {
      fontSize: 50,
      gridArea: "header",
      animation: "$headerDropIn 1750ms",
      animationTimingFunction: "ease-out",
      '&:hover': {
         // animation: "$forFun 1000ms"
      }
   },
   hContainer: {
      display: "grid",
      gridTemplateColumns: "[leftH] 10fr [header] auto [rightH] 10fr",
      width: "100vw",
      boxShadow: "0 5px 10px rgba(8, 159, 154, .25)",
      zIndex: 1
   },
   sessionButtonContainer: {
      gridArea: "rightH",
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
      paddingRight: ".5em"
   },
   sessionB: {
      margin: "0",
      padding: ".3em .75em",
      borderRadius: ".5em",
      height: "fit-content",
      fontSize: 20,
      '&:hover': {
         cursor: "pointer",
         color: "#e27d5e",
         background: "hsl(171deg 47% 48%)",
         animation: "$hoverButton 500ms",
         animationTimingFunction: "ease-in-out"
      }
   },
   selected: {
      color: "#e27d5e",
      margin: "0",
      padding: ".3em .75em",
      borderRadius: ".5em",
      height: "fit-content",
      fontSize: 20,
      background: "hsl(171deg 47% 48%)",
   },
   div: {
      width: 0,
      height: "50%",
      border: "1px solid #089f9a",
      margin: "0 5px"
   },
   //landing body;
   welcomeContainer: {
      display: "grid",
      gridTemplateColumns: " [welcomeMessage] 1fr [welcomeImage] 1fr",
   },
   welcomeMessage: {
      gridArea: "welcomeMessage",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "1em"
   },
   h1Template: {
      fontSize: 50,
      fontWeight: "bolder"
   },
   h3Template: {
      fontSize: 30
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
   welcomeImage: {
      gridArea: "welcomeImage",
      height: "800px",
      overflow: "hidden",
      marginTop: 2
   },
   imageContent: {
      height: "100%",
      width: "auto"
   },
   //modal
   modalContainer: {
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, .2)",
      
   },
   modalInner: {
      position: "fixed",
      right: 0,
      top: 75,
      color: "white",
      border: "1px solid #e27d5e",
      borderRadius: 20,
      background: "#41b3a1",
      animation: "$modalEnter 1000ms"
   },
   sessionForm: {
      padding: "1em",
      display: "flex",
      flexDirection: "column",
      minWidth: 200
   },
   borderBottom: {
      borderBottom: "2px solid #089f9a",

   },
   //animations
   "@keyframes hoverButton": {
    "0%": {
       background: "none",
      color: "white"
    },
    "100%": {
      background: "hsl(171deg 47% 48%)",
      color: "#e27d5e"
    }
   },
   "@keyframes headerDropIn": {
      "0%": {
         transform: "translatey(-100%)",
         color: "rgba(0,0,0,0)"
      },
      "100%": {
         transform: "translatey(0)"
      }
   },
   "@keyframes forFun": {
      "50%": {
         fontSize:3000
      }
   },
   "@keyframes slow":{
             "to": {
               backgroundPosition: "200% center"
            }
      },
   "@keyframes modalEnter": {
      "0%": {
         transform: "translatex(100%)",
         opacity: 0
      },
      "100%": {
         transform: "translatex(0)"
      }
   },
})


function Header(props){
   const classes = useStyles()
   const [login, setLogin] = useState(false)
   const [signUp, setSignUp] = useState(false)
   const [about, setAbout] = useState(false)
   const handleClick = (bool, setBool) => {
      return() => {
         setBool(true)
      }
   }
   return(
      <div className={classes.hContainer}>
         <div className={classes.header}>
            NoteFly
         </div>
         <div className={classes.sessionButtonContainer}>
            <div className={clsx({[classes.sessionB]: !signUp}, {[classes.selected]: signUp})} onClick={handleClick(signUp, setSignUp)}>
               <LandingModal close={() => setSignUp(false)}show={signUp}> <SessionForm/> </LandingModal>
               sign up
            </div>
            <div className={classes.div} />
            <div className={clsx({[classes.sessionB]: !login}, {[classes.selected]: login})} onClick={handleClick(login, setLogin)}>
               <LandingModal close={() => setLogin(false)} show={login}> hi! </LandingModal>
               login
            </div>
            <div className={classes.div} />
            <div className={clsx({[classes.sessionB]: !about}, {[classes.selected]: about})} onClick={handleClick(about, setAbout)}>
               <LandingModal close={() => setAbout(false)} show={about}> hi! </LandingModal>
               about
            </div>
         </div>
      </div>
   )
}
function SessionForm(props){
   const classes = useStyles()
   return ( 
      <div className={classes.sessionForm}>
         <div className={classes.borderBottom}>
            <div className={classes.h3Template}>
               Welcome To NoteFly!
            </div>
         </div>
      </div>
   )
}
function LandingModal(props){
   const classes = useStyles()
   const handleClose = (e) => {
      e.preventDefault()
      e.stopPropagation()
      if( e.target === e.currentTarget ){
         props.close()
      }
   }
   return(
      props.show ? 
      <div className={classes.modalContainer} onClick={handleClose}>
         <div className={classes.modalInner}>
            {props.children}
         </div>
         </div>
         : null
   )
}

export default function Landing(props){
   const classes = useStyles()
   return (
      <div>
         <Header/>
         <div className={classes.welcomeContainer}>
            <div className={classes.welcomeMessage}>
               <span className={classes.h1Template}>
               I'm a catchy one <span className={classes.gradientText}>liner</span> about how much you need my app
               </span>
               <br/>
               <span className={classes.h3Template}>
                  I'm a snappy follow up that will make you love my <span className={classes.gradientText}>app</span> :D
               </span>
            </div>
            <div className={classes.welcomeImage}>
               <img className={classes.imageContent}src={image}/>
            </div>
         </div>
      </div>
   )
}