import React, { useEffect, useState } from "react";
import useStyles from "./styles"
import { createFolder, updateFolder } from "../../actions/folder_actions"
import {useDispatch, useSelector} from "react-redux"
import SlideMenu from "../modal/slide_menu"
export default function FolderC({setShow, edit=false, _id="", oldName = "", oldAllTags=[], oldColor="white",}){
   const classes = useStyles({})
   const userId = useSelector( state => state.session.user.id)
   const errors = useSelector( state => state.errors.folders)
   const dispatch = useDispatch()
   const [name, setName] = useState(oldName)
   const [tag, setTag] = useState("")
   const [submitting, setSubmitting] = useState(false)
   const [allTags, setAllTags] = useState(oldAllTags)
   const [color, setColor] = useState(oldColor)
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
      if(edit){
         folder['_id'] = _id
      }
      setAllTags([])
      setName("")
      setTag("")
      const cb = edit ? updateFolder : createFolder
      cb(folder)(dispatch).then(() => {
         setSubmitting(false)
         setShow(false)
      })
   }
   return (
      <SlideMenu>

         
         <div className={classes.formCH}>
            {`${edit ? "Edit Your Folder" : "Create Your New Folder"}`}
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
         <div className={classes.formButtonC} onClick={handleSubmit}>
                      <div className={classes.formButton} style={{background: "hsl(171deg 47% 48%)", marginTop: "10px"}}>
                        {`${edit ? 'Update Folder' : 'Create New Folder'}`}
                     </div>
                   </div>
      </SlideMenu>
   )
}