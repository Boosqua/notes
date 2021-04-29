import React, { useEffect, useRef, useState } from "react"
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";
import image from "../../img/LOL.jpeg"
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux"
import {signup, login, clearSessionErrors} from "../../actions/session_actions"
import { Redirect, useLocation } from "react-router";
import { Link } from "react-router-dom";
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
      marginRight: 10,
      background: "#41b3a1",
      animation: "$modalEnter 1000ms"
   },
   sessionForm: {
      padding: "1em",
      display: "flex",
      flexDirection: "column",
      minWidth: 200
   },
   errors: {
      fontSize: 12,
      color: "red",
      fontStyle: "italic",
      textTransform: "uppercase"
   },
   formButtonC: {
      marginTop: 10,
      display: "flex",
      justifyContent: "center",
   },
   inputSection: {
      // background: "rgba(1, 1, 1, .1)",
      padding: ".3em .5em",

      boxShadow: "inset 19px -19px 14px 0px rgba(8,159,154,0.65)",
      marginTop: ".1em",
      fontSize: 16,
      borderRadius: 5
   },
   borderBottom: {
      borderBottom: "2px solid #089f9a",
   },
   formButton: {
      width: "fit-content",
      padding: "5px 1em",
      backgroundColor: "#e27d5e",
      borderRadius: 5,
      "&:hover": {
         padding: "5px 2em",
         transition: "500ms",
         cursor: "pointer"
      }
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
   const location = useLocation().pathname
   const signupRef = useRef(null)
   const loginRef = useRef(null)
   const aboutRef = useRef(null)
   const handleClick = (ref) => {
      return() => {
         ref.current.click()
      }
   }
   return(
      <div className={classes.hContainer}>
         <div className={classes.header}>
            NoteFly
         </div>
         <div className={classes.sessionButtonContainer}>
            <div className={clsx({[classes.sessionB]: !(location === "/signup")}, {[classes.selected]: (location === "/signup")})} onClick={handleClick(signupRef)}>
               {
                  location === "/signup" ? <LandingModal> <SignUpForm/></LandingModal> : null
               }
               sign up
            </div>
            <div className={classes.div} />
            <div className={clsx({[classes.sessionB]: !(location === "/login")}, {[classes.selected]: (location === "/login")})} onClick={handleClick(loginRef)}>
               {
                  location === "/login" ? <LandingModal> <LoginForm/> </LandingModal> : null
               }
               login
            </div>
            <div className={classes.div} />
            <div className={clsx({[classes.sessionB]: !(location === "/about")}, {[classes.selected]: (location === "/about")})} onClick={handleClick(aboutRef)}>
               {
                  location === "/about" ? <LandingModal> I'll Put info here later!</LandingModal> : null
               }
               about
            </div>
         </div>
         <Link ref={loginRef} style={{display: "none"}}to="/login" />
         <Link ref={signupRef} style={{display: "none"}}to="/signup" />
         <Link ref={aboutRef} style={{display: "none"}}to="/about" />
      </div>
   )
}


function SignUpForm(props){
   const classes = useStyles()
   const errors = useSelector(state => state.errors.session)
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [password2, setPassword2] = useState("")
   const dispatch = useDispatch()
   const inputEl = useRef(null)

   useEffect(()=> {
      inputEl.current.focus()
   }, [])
   const handleChange = (cb) => {
      return (e) => {
         cb(e.currentTarget.value)
      }
   }
   const handleSubmit = () => {
      const user = {
         username: name,
         email: email,
         password: password,
         password2: password2
      }
      signup(user)(dispatch)
      setPassword("")
      setPassword2("")
   }
   return ( 
      <div className={classes.sessionForm} onKeyDown={(e) => {
         if( e.key === "Enter" ){
            e.preventDefault()
            handleSubmit()
         }
      }}>
         <div className={classes.borderBottom}>
            <div className={classes.h3Template}>
               Welcome To NoteFly!
            </div>
         </div>
         <form>
            <div>
               Username
            </div>
            <div className={classes.inputSection}>
               <input ref={inputEl}ype="text" value={name} onInput={handleChange(setName)}/>
            </div>
            {
               !Array.isArray(errors) && errors.username ?
               (<div className={classes.errors}>
                  {errors.username}
               </div>)
               : null
            }
            <div>
               Email
            </div>
            <div className={classes.inputSection}>
               <input type="text" value={email} onInput={handleChange(setEmail)}/>
            </div>
            {
               !Array.isArray(errors) && errors.email ?
               (<div className={classes.errors}>
                  {errors.email}
               </div>)
               : null
            }
            <div>
               Password
            </div>
            <div className={classes.inputSection}>
               <input type="password" value={password} onInput={handleChange(setPassword)}/>
            </div>
            {
               !Array.isArray(errors) && errors.password ?
               (<div className={classes.errors}>
                  {errors.password}
               </div>)
               : null
            }
            <div>
               Confirm Password
            </div>
            <div className={classes.inputSection}>
               <input type="password" value={password2} onInput={handleChange(setPassword2)}/>
            </div>
            {
               !Array.isArray(errors) && errors.password2 ?
               (<div className={classes.errors}>
                  {errors.password2}
               </div>)
               : null
            }
            <div className={classes.formButtonC}><div className={classes.formButton} onClick={handleSubmit}>submit</div></div>
         </form>
         </div>
   )
}

function LoginForm(props){
   const classes = useStyles();
   const errors = useSelector(state => state.errors.session)
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const dispatch = useDispatch()
   const inputEl = useRef(null)
   useEffect(()=> {
      inputEl.current.focus()
   }, [])
   const handleChange = (cb) => {
      return (e) => {
         cb(e.currentTarget.value)
      }
   }
   const handleSubmit = () => {
      const user = {
         email: email,
         password: password
      }
      login(user)(dispatch)
   }
   return ( 
      <div className={classes.sessionForm} onKeyDown={(e) => {
         if( e.key === "Enter" ){
            e.preventDefault()
            handleSubmit()
         }
      }}>
         <div className={classes.borderBottom}>
            <div className={classes.h3Template}>
               Welcome Back!
            </div>
         </div>
         <form>
            <div>
               Email
            </div>
            <div className={classes.inputSection}>
               <input ref={inputEl}ype="text" value={email} onInput={handleChange(setEmail)}/>
            </div>
            {
               !Array.isArray(errors) && errors.email ?
               (<div className={classes.errors}>
                  {errors.email}
               </div>)
               : null
            }
            <div>
               Password
            </div>
            <div className={classes.inputSection}>
               <input type="password" value={password} onInput={handleChange(setPassword)}/>
            </div>
            {
               !Array.isArray(errors) && errors.password ?
               (<div className={classes.errors}>
                  {errors.password}
               </div>)
               : null
            }
            <div className={classes.formButtonC}><div className={classes.formButton} onClick={handleSubmit}>submit</div></div>
         </form>
         </div>
   )

}
function LandingModal(props){
   const dispatch = useDispatch()
   const classes = useStyles()
   const [show, setShow] = useState(true)
   const handleKey = (e) => {
      // debugger
      if( e.key === "Escape"){
         setShow(false)
         dispatch(clearSessionErrors())
      }
   }
   useEffect(() => {
      document.addEventListener("keydown", handleKey)
      return function(){
         document.removeEventListener("keydown", handleKey)
      }
   }, [])

   const handleClose = (e, option = false) => {
      e.preventDefault()
      e.stopPropagation()
      if( e.target === e.currentTarget || option){
         setShow(false)
         dispatch(clearSessionErrors())
      }
   }
   return(
      show ? 
      <div  className={classes.modalContainer} onClick={handleClose} onKeyDown={(e) => {
         // if(e.key === "Escape"){
         //    e.preventDefault();
         //    setShow(false)
         //    dispatch(clearSessionErrors())
         // }
      }}>
         <div className={classes.modalInner}>
            {props.children}
         </div>
         <input style={{display: "none"}}/>
         </div>
         : <Redirect to="/"/>
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