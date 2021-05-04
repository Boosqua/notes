import React, {useEffect} from "react"
import { createUseStyles } from "react-jss"


export default function Modal({show, setShow, children}){
   const classes = useStyles()
   const handleKey = (e) => {
      if( e.key === "Escape"){
         setShow(false)
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
      }
   }
   return(
      show ? 
      <div  className={classes.modalContainer} onClick={handleClose}>
            {children}
         <input style={{display: "none"}}/>
         </div>
         : null
   )
}

const useStyles = createUseStyles({
   modalContainer: {
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0, 0, 0, .2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center" 
   }
})