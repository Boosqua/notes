import React, {useState, useEffect} from 'react';
import { useRouteMatch } from "react-router";
import { useSelector, useDispatch } from 'react-redux';


import useStyles from "./styles";
import WSSidebar from "./sidebar";
import Header from "../home/home_header";
import Sidebar from "../modal/sidebar";
import Editor from "../text_editor/editor"

import { receiveNote } from "../../actions/note_actions"
import { updateNote } from "../../util/note_util"

export default function NoteWorkSpace(){
   const classes = useStyles({});
   const dispatch = useDispatch()

   const {params} = useRouteMatch();

   const folder = useSelector(state => state.folder[params.id]);
   const notes = useSelector(state =>  state.note[params.id] ? 
      state.note[params.id].sort( (a,b) => {
         if( a.updatedAt > b.updatedAt ){
            return -1
         } else {
            return 1
         }
      })
      : 
      []
   );
   const currentNote = useSelector( state => state.util.currentNote );

   useEffect(() => {
      if( currentNote._id !== params.noteId ){
         let aNote = findNote(notes, params.noteId)
         dispatch(receiveCurrentNote(aNote))
         
      }

   }, [params.noteId])


   const [collapse, setCollapse] = useState(false);
   const [animate, setAnimate] = useState(false);
   const [stall, setStall] = useState(false);
   const [autoSave, setAutoSave] = useState(false)
   const handleSave = (text) => {
      const update = {_id: params.noteId, body: text, name: currentNote.name}
      // dispatch(receiveNote(update))
      updateNote(update).then( note => console.log(note)).catch(err => console.log(err))
   }
   return (
      <div className={classes.rowFlex}>
         <Sidebar animate={animate} collapse={collapse}>
            <WSSidebar folder={folder} notes={notes}/>
         </Sidebar>
         <div className={classes.columnFlex}>
            <Header  
            collapse={collapse}
            setCollapse={() => {
               if(stall) return
               setStall(true)
               setAnimate(true)
               setTimeout(() => {
                  setCollapse(!collapse)
                  setAnimate(false)
                  setStall(false)
               }, 300)
            }}/>
            <Editor handleSave={handleSave} note={currentNote} id={currentNote._id}/>
         </div>
      </div>
   )
}

const findNote = (notes, noteId) => {
   for( let i = 0; i < notes.length; i++ ){
      let currentNote = notes[i];
      if( currentNote._id === noteId ){
         return currentNote
      }
   }
};

const receiveCurrentNote = note => ({
   type: "SET_CURRENT_NOTE",
   note
});