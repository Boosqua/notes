import React, {useState, useEffect} from 'react';
import { useRouteMatch } from "react-router";
import { useSelector, useDispatch } from 'react-redux';


import useStyles from "./styles";
import WSSidebar from "./sidebar";
import Header from "../home/home_header";
import Sidebar from "../modal/sidebar";
import Editor from "../text_editor/editor"
import CustomToolbar from "../text_editor/custom_toolbar"

import { updateNote } from "../../actions/note_actions"


export default function NoteWorkSpace(){
   const classes = useStyles({});
   const dispatch = useDispatch()

   const {params} = useRouteMatch();

   const folder = useSelector(state => state.folder[params.id]);
   const allNotes = useSelector(state =>  state.note)
   const notes = allNotes[params.id] ? 
      allNotes[params.id].sort( (a,b) => {
         if( a.updatedAt > b.updatedAt ){
            return -1
         } else {
            return 1
         }
      })
      : 
      []
   
   const currentNote = useSelector( state => state.util.currentNote );

   const [collapse, setCollapse] = useState(false);
   const [animate, setAnimate] = useState(false);
   const [stall, setStall] = useState(false);
   const [rand, setRand] = useState(Math.random)
   
   useEffect(() => {
      if(params.noteId && !currentNote._id){
         if(notes) {
            for( let i = 0; i < notes.length; i++ ) {
               if( notes[i]._id === params.noteId ){
                  dispatch( receiveCurrentNote(notes[i]) )
               }
            }
         }
      }
   }, [currentNote])

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
            <CustomToolbar/>
            {
               notes.map( (note) => {
                  return note._id  === currentNote._id ? 
                   <Editor  
                        body={decodeDelta(currentNote.body)} 
                        id={note._id + rand}
                        key={note._id}
                        setRand={setRand}
                        handleSave={(text) => {
                           const newText = packet(text)
                           if(newText !== note.body && note._id){
                              const newNote = Object.assign({}, note, {body: newText})
                              updateNote(newNote)(dispatch)
                           }
                        }}
                        />
                  :
                  null
               })
            }
            
         </div>
      </div>
   )
}


const decodeDelta = (delta) => delta ? JSON.parse(delta) : null
const packet = (delta) => JSON.stringify(delta)
const receiveCurrentNote = note => ({
   type: "SET_CURRENT_NOTE",
   note
});