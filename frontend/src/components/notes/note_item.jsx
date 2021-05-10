import React, {useState, useRef} from "react";
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";

import useStyles from "../workspace/styles";
import {deleteNote} from "../../actions/note_actions"
import Modal from "../modal/modal"
import NoteMenu from "../notes/note_menu"
import NoteCrud from "../notes/note_crud"

export default function NoteItem({note }){
   const [show, setShow] = useState(false)
   const classes = useStyles({hover: true, show: show})
   const [pos, setPos] = useState({left: 0, top: 0})
   const [edit, setEdit] = useState(false)
   const dispatch = useDispatch()
   const linkRef = useRef(null)

   return (
      <>
      <div className={classes.noteItem} onClick={() => {
         linkRef.current.click()
      }}>
            <div className={classes.itemIcon} style={{color: note.color}}>
               <i class="fas fa-file-alt"></i>
            </div>
            <div className={classes.itemTitle}>
               {note.name}
            </div>

         <div className={classes.folderItemAddIcon} onClick={(e) => {
            e.stopPropagation()
            setPos({left: e.clientX, top: e.clientY})
            setShow(true)
         }}>
            <i class="fas fa-ellipsis-v"></i>
         </div>
            <Modal show={show} setShow={() => setShow(false)}>
                  <NoteMenu pos={pos} 
                  handleEdit={() => {
                     setEdit(true)
                     setShow(false)
                  }} 
                  handleDelete={() => {
                     setShow(false);
                     deleteNote(note._id, note)(dispatch)
                  }}/> 
            </Modal>
            <NoteCrud show={edit} setShow={() => setEdit(false)} note={note} edit={true}/>
            <Link 
               ref={linkRef}
               to={`/@me/folder/${note.folder}/note/${note._id}`} 
               style={{display: "none"}}
               />
         </div>
      </>
   )
}