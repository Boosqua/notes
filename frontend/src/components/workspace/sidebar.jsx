import React, {useState} from "react";
import {useSelector} from "react-redux";

import useStyles from "./styles"
import FolderItem from "./folder_item"
import NoteItem from "../notes/note_item"
import Button from "../reusable/button"
import NoteCrud from "../notes/note_crud"

export default function Sidebar({folder, notes}){
   const user = useSelector(state => state.session.user)
   const [show, setShow] = useState(false)
   const [collapse, setCollapse] = useState(false)
   const classes = useStyles({collapse})
   return (
      <div className={classes.wSSidebar}>
         <div className={classes.wSHeader}>
            {user.name}
         </div>
         <FolderItem folder={folder} open={!collapse} add={true} onClick={()=> setCollapse(!collapse)}/>
         {
            collapse ?
            null
            :
            <div>
               {notes.map( (note, i) => <NoteItem note={note} key={i} />)}
               <Button handleClick={() => setShow(true)} expand={true}>Create New Note</Button>
            </div>
         }
         <NoteCrud show={show} setShow={() => setShow(false)} folder={folder}/>
      </div>
   )
}