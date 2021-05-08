import React from "react"
import {createUseStyles} from "react-jss";

export default function NoteMenu(props){
   const classes = useStyles({left: props.pos.left, top: props.pos.top})

   return(
      <div className={classes.noteMenu}>
         <div className={classes.option} onClick={props.handleEdit}>Edit Note</div>
         <div className={classes.option} onClick={props.handleEdit}>Share Note</div>
         <div className={classes.option} onClick={props.handleDelete}>Delete Note</div>
      </div>
   )
}

const useStyles = createUseStyles({
   noteMenu: {
      padding: ".5em",
      background: "rgb(226 125 94)",
      border: "1px solid #e8a97c",
      position: "absolute",
      left: options => options.left,
      top: options => options.top,
      borderRadius: 10,
      fontSize: 18
   },
   option: {
      padding: ".2em .5em",
      margin: ".2em",
      borderRadius: 5,
      "&:hover":{
         background: "rgb(65 180 163)"
      }
   }
})