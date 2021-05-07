import React, { useState } from "react"
import { createUseStyles } from "react-jss"
import {useDispatch, useSelector} from "react-redux"

import Modal from "../modal/modal"
import SlideMenu from "../modal/slide_menu"
import Button from "../reusable/button"
import Tag from "../reusable/tag"
import { createNote } from "../../actions/note_actions"


export default function NoteCrud({show, setShow, folder, edit=false, note={}}){
   const classes = useStyles({})
   const dispatch = useDispatch()
   const user = useSelector( state => state.session.user)
   const [name, setName] = useState("")
   const [tag, setTag] = useState("")
   const [color, setColor] = useState("white")
   const [allTags, setAllTags] = useState([])

   return(

         <Modal show={show} setShow={setShow}>
            <SlideMenu>
               <div className={classes.header}>
                  {`Add New Note to ${folder.name}`}
               </div>
               <div className={classes.section}>
                  Note Title:
               </div>
               <input 
                     className={classes.formInput} 
                     type="text" 
                     value={name}
                     placeholder="My Favorite Note..."
                     onChange={(e) => setName(e.target.value)}
                     />
               <div className={classes.section}>
                  Note Tags:
               </div >
               <input 
                     className={classes.formInput} 
                     type="text" 
                     value={tag}
                     placeholder="My Favorite Tag..."
                     onChange={(e) => setTag(e.target.value)}
                     />
               <div className={classes.allTags}>
                  {
                     allTags.map( (tag, i) => <Tag 
                     key={i} 
                     editable={true} 
                     handleClick={ () => {
                        setAllTags(allTags.filter((tag,idx) => idx !== i))
                     }}
                     text={tag}
                     >

                     </Tag>)
                  }
               </div>
               <Button 
                     center={false} 
                     color="rgb(65 180 163)" 
                     handleClick={ () => {
                        setAllTags([...allTags, tag])
                        setTag("")
                     }}>
                  Add Tag
               </Button>
               <div className={classes.docRow}>
                  <div 
                        onClick={() => setColor("white")}
                        className={ color === "white" ? classes.selectedIcon : "" }>
                     <DocIcon color="white"/>
                  </div>
                  <div 
                        onClick={() => setColor("black")}
                        className={ color === "black" ? classes.selectedIcon : "" }>
                     <DocIcon color="black"/>
                  </div>
                  <div 
                        onClick={() => setColor("blue")}
                        className={ color === "blue" ? classes.selectedIcon : "" }>
                     <DocIcon color="blue"/>
                  </div>
                  <div 
                        onClick={() => setColor("green")}
                        className={ color === "green" ? classes.selectedIcon : "" }>
                     <DocIcon color="green"/>
                  </div>
                  <div 
                        onClick={() => setColor("yellow")}
                        className={ color === "yellow" ? classes.selectedIcon : "" }>
                     <DocIcon color="yellow"/>
                  </div>
               </div>
               <Button
                     center={true} 
                     expand={true}
                     color="rgb(65 180 163)" 
                     handleClick={ () => {
                        const note = {
                           name,
                           tags: allTags,
                           color,
                           owner: user.id,
                           folder: folder._id
                        }
                        createNote(note)(dispatch)
                        setName("")
                        setTag("")
                        setColor("white")
                        setAllTags([])
                        setShow()
                     }}
                     >
                  Create Note
               </Button>
            </SlideMenu>
         </Modal>
   )
}
function DocIcon({color}){
   const classes = useStyles({color})

   return (
      <div className={classes.docIcon}>
         <i class="fas fa-file-alt"></i>
      </div>
   )
}
const useStyles = createUseStyles({
   header: {
      fontSize: 25
   },
   formInput: {
      fontSize: 20,
      width: "95%",
      borderRadius: 5,
      color: "white",
      padding: 5,
      width: "100%",
      margin: "10px 0",
      background: "#e8a97c",
   },
   section: {
      fontSize: 20,
      borderBottom: "1px solid white",
      width: "fit-content",
      margin: "10px 0",
   },
   docIcon: {
      color: options => options.color,
      fontSize: 20,
      padding: ".25em .5em",
      "&:hover": {
         cursor: "pointer"
      }
   },
   docRow: {
      display: "flex",
      flexDirection: "row",
      padding: ".5em 0 .5em 0",
      justifyContent: "space-evenly"
   },
   selectedIcon: {
      borderRadius: "10%",
      backgroundColor: "#85cdc9"
   },
   allTags: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      maxWidth: "250px"
   }
})