import React, { useState } from "react"
import {createUseStyles} from "react-jss";
import Modal from "../modal/modal"
export default function NoteMenu(props){
   const classes = useStyles({left: props.pos.left, top: props.pos.top})
   const [show, setShow] = useState(false)
   return(
      <div className={classes.noteMenu}>
         <div className={classes.option} onClick={props.handleEdit}>Edit Note</div>
         <div className={classes.option} onClick={() => setShow(true)}>Share Note</div>
         <div className={classes.option} onClick={props.handleDelete}>Delete Note</div>
         <Modal show={show} setShow={() => setShow(false)}>
            <ShareLink note={props.note}></ShareLink>
         </Modal>
      </div>
   )
}
function ShareLink({note}){
   const classes = useStyles({left: "50%", top: "50%"})

   return <div className={classes.noteMenu}>
      <div>Heres a link to your note!</div>
      <div>{`https://notefly.herokuapp.com/#/shared_note/${note._id}`}</div>
   </div>
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
      fontSize: 18,
      cursor: "auto"
   },
   option: {
      padding: ".2em .5em",
      margin: ".2em",
      borderRadius: 5,
      "&:hover":{
         background: "rgb(65 180 163)",
         cursor: "pointer"
      }
   }
})