import React from "react";
import {createUseStyles} from "react-jss";

export default function Tag({children, editable, handleClick, text}){
   const classes = useStyles({})

   return(
      <div className={classes.tagContainer}>
         <div className={classes.tagContent}>
            {text}
         </div>
         {
            editable ? 
               <div 
                     className={classes.closeIcon}
                     onClick={handleClick}
                     >
                  <i class="fas fa-times"></i>
               </div>
            :
            null
         }
      </div>
   )
}

const useStyles = createUseStyles({
   tagContainer:{
      width: 'fit-content',
      margin: '0 .25em .75em',
      fontSize: 12,
      display: 'flex',
      padding: '.5em',
      background: 'rgb(196, 140, 157)',
      alignItems: 'center',
      borderRadius: '.25em',
      flexDirection: 'row'
   },
   tagContent: {
      maxWidth: "3em",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
   },
   closeIcon: {
      marginLeft: ".5em",
      "&:hover": {
         cursor: "pointer"
      }
   }
})