import React from "react"
import { createUseStyles } from "react-jss";

export default function SlideMenu(props){
   const classes = useStyles({})
   return (
      <div className={classes.slideMenu}>
         {props.children}
      </div>
   )
}


const useStyles = createUseStyles({
   slideMenu: {
      height: "fit-content",
      animation: "$slideUp 1s",
      padding: 30,
      background: "#e27d5e",
      border: "1px solid #e8a97c",
      borderRadius: 10,
      width: 290,
      maxWidth: 290
  },
    "@keyframes slideUp": {
    from: {
      transform: "translateY(-80vh)",
      opacity: 0,
    },
  },
})