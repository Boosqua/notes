import React, { useEffect, useState } from "react";
import useStyles from "./styles"
import { createFolder} from "../../actions/folder_actions"
import {useDispatch, useSelector} from "react-redux"

export default function FolderC({setShow}){
   const classes = useStyles()
   const userId = useSelector( state => state.session.user.id)
   const errors = useSelector( state => state.errors.folders)
   const dispatch = useDispatch()
   const [name, setName] = useState("")
   const [tag, setTag] = useState("")
   const [submitting, setSubmitting] = useState(false)
   const [allTags, setAllTags] = useState([])
   const [color, setColor] = useState("white")
   const handleKey = (e) => {
      if(e.key === "Enter") handleSubmit()
   }
   useEffect(() => {
      document.addEventListener("keydown", handleKey)
      return function(){
         document.removeEventListener("keydown", handleKey)
      }
   }, [])
   const handleColor = (color) => () => setColor(color) 
   const addTag = () => {
      if(tag.length <= 2) return
      setAllTags([...allTags, tag])
      setTag("")
   }
   const handleInput = (cb) => {
      return (e) => {
         cb(e.currentTarget.value)
      }
   }
   const handleSubmit = () => {
      setSubmitting(true)
      const folder = { name: name, owner: userId, tags: allTags, color: color}
      setAllTags([])
      setName("")
      setTag("")
      createFolder(folder)(dispatch).then(() => setSubmitting(false))
   }
   return (
      <div className={classes.folderCC}>
         <div className={classes.rrFlex2}>
            <div className={classes.closeIcon} onClick={()=> {
               setShow(false)
            }}>
               <i class="fas fa-times"></i>
            </div>
         </div>
         
         <div className={classes.formCH}>
            Create Your New Folder
         </div>
         <div className={classes.formCIH}>
            Folder Name:
         </div>
         <input 
            className={classes.formCI} 
            placeholder="My Favorite Folder..." 
            value={name}
            type="text"
            onInput={handleInput(setName)}
            style={{border: errors.name ? "2px solid red" : "2px solid rgba(0, 0,0,0)"}}
         />
         {
            errors.name ? 
               <div style={{background: "red", width: "fit-content", borderRadius: "5px", padding: ".25em"}}>{errors.name}</div>
               : 
               null
         }
         <div className={classes.formCIH}>
            Folder Tags:
         </div>
         <input 
            className={classes.formCI} 
            placeholder="My Favorite Tag..." 
            value={tag}
            type="text"
            onInput={handleInput(setTag)}
         />
         <div className={classes.tagGrid}>

            {allTags.map( (tag, i) => (
               <div className={classes.tags}key={i}>
                  <div className={classes.tagContent}>
                     {tag}
                  </div>
                  <div className={classes.closeIcon} onClick={()=> {
                     setAllTags(allTags.filter( (tag1, idx) => idx !== i))
                  }}>
                     <i class="fas fa-times"></i>
                  </div>
               </div>
            ))}
            </div>

         
         <div className={classes.tagButton} onClick={addTag}>
            Add Tag
         </div>
         <div className={classes.formCIH}>
            Folder Color:
         </div>
         <span className={ color === "white" ? classes.folderIconButtonS: classes.folderIconButton}
         onClick={handleColor("white")}
         >
         <span className={classes.folderIconWhite}>
            <i class="fas fa-folder"></i>
         </span>
         </span>
         <span className={ color === "black" ? classes.folderIconButtonS: classes.folderIconButton}
         onClick={handleColor("black")}
         >
         <span className={classes.folderIconBlack}>
            <i class="fas fa-folder"></i>
         </span>
         </span>
         <span className={color === "blue" ? classes.folderIconButtonS: classes.folderIconButton}
         onClick={handleColor("blue")}
         >
         <span className={classes.folderIconBlue}>
            <i class="fas fa-folder"></i>
         </span>
         </span>
         <span className={color === "green" ? classes.folderIconButtonS: classes.folderIconButton}
         onClick={handleColor("green")}
         >
         <span className={classes.folderIconGreen}>
            <i class="fas fa-folder"></i>
         </span>
         </span>
         <span className={color === "yellow" ? classes.folderIconButtonS: classes.folderIconButton}
         onClick={handleColor("yellow")}
         >
         <span className={classes.folderIconYellow}>
            <i class="fas fa-folder"></i>
         </span>
         </span>
         {
            submitting ? 
            <div>{`Creating ${name}`}</div>
            :
            null
         }
         <div className={classes.formButtonC} onClick={handleSubmit}>
                      <div className={classes.formButton} style={{background: "hsl(171deg 47% 48%)", marginTop: "10px"}}>
                        Create New Folder
                     </div>
                   </div>
      </div>
   )
}