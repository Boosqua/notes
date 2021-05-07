import React from "react";
import { createUseStyles } from "react-jss";

export default function Button({expand=false, color, handleClick, children}){
   const classes = useStyles({expand, color})
   return(
         <div className={classes.row} >
            <div className={classes.formButtonC} onClick={handleClick}>
               <div className={classes.formButton}>
                  {children}
               </div>
            </div>
         </div>
   )
}

const useStyles = createUseStyles({
   row: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
   },
   formButton: {
      width: "fit-content",
      padding: "5px 1em",
      backgroundColor: options => options.color ? options.color : "#e27d5e",
      overflow: "hidden",
      textOverflow: "clip",
      whiteSpace: "nowrap",
      borderRadius: 5,
      boxShadow: "1px 1px 4px #808080",
      "&:hover": {
         padding: options => options.expand ? "5px 2em" : "5px 1em",
         transition: "500ms",
         cursor: "pointer",
      },
   },
   formButtonC: {
    marginTop: 10,
    display: "flex",
    justifyContent: "center",
  },
})