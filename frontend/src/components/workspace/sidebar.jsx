import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"

import useStyles from "./styles"
import FolderItem from "./folder_item"
import NoteItem from "../notes/note_item"
import Button from "../reusable/button"
import NoteCrud from "../notes/note_crud"

export default function Sidebar({folder, notes}){
   const user = useSelector(state => state.session.user)
   const [show, setShow] = useState(false)
   const [collapse, setCollapse] = useState(false)
   const classes = useStyles({collapse, hover: true})
   const currentNote = useSelector( state => state.util.currentNote)
   return (
      <div className={classes.wSSidebar}>
         <div className={classes.wSHeader}>
            {user.name}
         </div>
         <div>
         <Link to="/@me">
            <div className={classes.folderItem}>
               <div className={classes.itemIcon } style={{color: "white"}}>
                  <i class="fas fa-house-user"></i>
               </div>
               <div className={classes.itemTitle}>
                  Home
               </div>
            </div>
         </Link>

         </div>
         <FolderItem folder={folder} open={!collapse} add={true} onClick={()=> setCollapse(!collapse)}/>
         {
            collapse ?
            <div>
               {
                  currentNote._id ? 
                  <NoteItem note={currentNote} /> 
                  : 
                  null
               }
               <Button handleClick={() => setShow(true)} expand={true}>Create New Note</Button>
            </div>
            :
            <div>
               {notes.map( (note, i) => <NoteItem note={note} key={note._id} />)}
               <Button handleClick={() => setShow(true)} expand={true}>Create New Note</Button>
            </div>
         }
         <NoteCrud show={show} setShow={() => setShow(false)} folder={folder}/>
      </div>
   )
}