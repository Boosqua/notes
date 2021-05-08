import React, {useState} from 'react';
import { useRouteMatch } from "react-router"
import { useSelector } from 'react-redux';


import useStyles from "./styles"
import WSSidebar from "./sidebar"

import Header from "../home/home_header"
import Sidebar from "../modal/sidebar"
import Button from "../reusable/button"
import NoteCrud from "../notes/note_crud"
import NoteData from "../notes/note_data"

export default function Workspace(){
   const {params} = useRouteMatch();
   const folder = useSelector(state => state.folder[params.id])
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
   )
   const classes = useStyles({})
   const [collapse, setCollapse] = useState(false)
   const [animate, setAnimate] = useState(false)
   const [stall, setStall] = useState(false)
   
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
         <div className={classes.columnFlexInner}>
            <div className={classes.noteDataHeader}>
               <span className={classes.itemIcon }style={{ color: folder.color }}>
                  <i class="fas fa-folder-open"></i>
               </span>
               <span>
                  {folder.name}
               </span>
            </div>

            {
               notes.length > 0 ? 
                  <div className={classes.noteDataColumn}>
                    { notes.map( (note, i) => <NoteData note={note} key={note._id}/>  ) }
                  </div>
                  : 
                  <EmptyMessage folder={folder}/>
            }
         </div>
         </div>
      </div>
   )
}








function EmptyMessage({folder}) {
   const classes = useStyles({})
   const [show, setShow] = useState(false)

   return (
      <div className={classes.emptyMessage}>
         You haven't created any notes for this folder yet!
         <div className={classes.emptyMessageButton}>
            <Button center={false} handleClick={() => setShow(true)}>Create First Note!</Button>
         </div>
         <NoteCrud show={show} setShow={() => setShow(false)} folder={folder}/>
      </div>
   )
}