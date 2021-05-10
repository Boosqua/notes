import React, {  useState } from "react";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux"
import {Link} from "react-router-dom";

import Tag from "../reusable/tag";
import Button from "../reusable/button"
import NoteCrud from "./note_crud"

import parseDate from "../../util/date_util";
import { deleteNote } from "../../actions/note_actions"

export default function NoteData({note}){
   const dispatch = useDispatch()
   const { name, color, tags } = note;
   const [collapse, setCollapse] = useState(true);
   const [stall, setStall] = useState(true);
   const [details, setDetails] = useState(false);
   const [show, setShow] = useState(false);
   const classes = useStyles({ color, collapse, stall, details });

   return (
      <>
         <div 
            className={classes.noteDataContainer}
            onClick={() => {
                  setCollapse(!collapse)
                  if(details) setDetails(false)
                  if(!stall) setStall(true)
               }}
            >
            <div className={classes.docIcon}>
               <i class="fas fa-file-alt"></i>
            </div>
            {name}
         </div>
         <div className={classes.noteDetails}>
            <div className={classes.noteDetailHeader} onClick={(e)=> {
                  // e.stopPropagation()
                  setDetails(!details)
                  setStall(false)
               }}>
               <>Note Details</>
               <div className={classes.dataArrow} >
                  {
                     details ? 
                        <i  class="fas fa-chevron-down"></i>
                        :
                        <i  class="fas fa-chevron-right"></i>
                  }
               </div>
            </div>
               {
                  details ? 
                     <div className={ classes.detailContainer }>
                        <div className={classes.menuAni}>
                           {`Created on: ${parseDate(note.createdAt)}`}
                        </div>
                        <div className={classes.menuAni}>
                           {`Last Modified on: ${parseDate(note.createdAt)}`}
                        </div>
                        <div className={classes.menuAni}>
                           {`Visibility: ${note.public? "Public" : "Private"}`}
                        </div>
                     </div>
                     :
                     null
               }
               <div className={classes.noteDetailHeaderNH}>
                  <>Note Tags</>
               </div>
               <div className={classes.tagContainer}>
                  {
                     tags.map( (tag, i) => <Tag key={i} editable={false} text={tag}/>)
                  }
               </div>
               <div className={classes.noteDetailHeaderNH} style={{color: "white", fontSize: "16px"}}>
                  <Button 
                  color="rgb(65 180 163)"
                  handleClick={(e) => {
                     setShow(true)
                  }}
                  >
                     Edit Note
                  </Button>
               </div>
               <Link 
                     to={`/@me/folder/${note.folder}/note/${note._id}`}
                     className={classes.noteDetailHeaderNH} 
                     style={{color: "white", fontSize: "16px"}}
                     >
                  <Button 
                  color="rgb(65 180 163)"
                  handleClick={(e) => {

                  }}
                  >
                     Open Note
                  </Button>
               </Link>
               <div className={classes.noteDetailHeaderNH} style={{color: "white", fontSize: "16px"}}>
                  <Button 
                  color="red"
                  handleClick={(e) => {
                     deleteNote(note._id, note)(dispatch)
                     setCollapse(true)
                  }}
                  >
                     Delete Note
                  </Button>
               </div>
         </div>
         <NoteCrud 
               show={show} 
               setShow={() => setShow(false)} 
               edit={true}
               note={note}
               />
      </>
   )
}
/**
 * 
 * <div className={classes.collapseIcon}>
               <div className={classes.arrow}><i  class="fas fa-chevron-down"></i></div>
            </div>
 */
const useStyles = createUseStyles({
   noteDataContainer: {
      fontSize: 35,
      display: "flex",
      flexDirection: "row",
      padding: "0 2em 0 1em",
      width: 'fit-content',
      color: options => options.collapse === true ?  "white" : "#e37d5e",
      "&:hover": {
         cursor: "pointer",
         color: "#e37d5e"
      }
   },
   docIcon: {
      marginRight: "1em",
      color: options => options.color,
      
   },
   collapseIcon: {
      width: "100%",
      display: "flex",
      flexDirection: "row-reverse"
   },
   noteDetails: {
      display: options => options.collapse === true ? "none" : "block",
      background: "#e8a97c",
      borderRadius: 5,
      boxShadow: "inset 4px 4px 20px 0px #e27d5e",
      padding: ".5em",
      fontSize: 35,
      marginLeft: "1em"
   },
   noteDetailHeader: {
      fontSize: 20,
      color: "rgb(56 130 118)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      "&:hover": {
         cursor: "pointer"
      }
   },
   noteDetailHeaderNH: {
      fontSize: 20,
      color: "rgb(56 130 118)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
   },
   dataArrow: {
      animation: options => {
         if( options.stall === true ) return ""
         return options.details === true ? 
            "$spinDown 500ms"
            : 
            "$spinRight 500ms"
      }
   },
   menuAni: {
      marginLeft: "1em"
   },
   detailContainer: {
      display: options => options.details === true ? "block" : "none",
      fontSize: 14,
      overflow: "hidden",
      height: "5em",
      animation: "$moveDown 1s",
      transition: "height 1s",
   },
   tagContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap"
   },
   "@keyframes spinDown": {
    from: {
      transform: "rotate(-90deg)",
    },
  },
  "@keyframes spinRight": {
    from: {
      transform: "rotate(90deg)",
    },
  },
  "@keyframes moveDown": {
     from: {
        height: 0,
        padding: 0
     },
     to: {
        height: "5em"
     }
  }
})