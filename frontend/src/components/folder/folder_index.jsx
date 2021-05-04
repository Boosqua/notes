import React, { useState } from "react"
import {useSelector} from "react-redux"
import Modal from "../modal/modal"
import useStyles from "./styles"
import {Link} from "react-router-dom"
import FolderC from "./folder_c"
export default function FolderIndex({collapse, animate}) {
   const [show, setShow] = useState(false)
   const folders = useSelector( state => Object.values(state.folder))
   const classes = useStyles({collapse, animate})

   return (
      <div className={classes.folderOU}>
         <div className={classes.folderIndexC}>
               <div className={classes.folderIC}>
                  <div className={classes.folderHeader}>Folders</div>
               {
                  folders.map( (folder, i) => {
                     return (
                        <div key={i} className={classes.borderColor}>
                           <div className={classes.folderLink} >
                              <span style={{color: folder.color? folder.color : "green"}}>
                              <i class="fas fa-folder"></i> 
                              </span>
                              <div className={classes.manageText}>
                              {`${folder.name}`}
                              </div>
                           </div>
                        </div>
                     ) 
                  })
               }
               <div className={classes.rrFlex}>
                  <div className={classes.row} >
                   <div className={classes.formButtonC} onClick={() => setShow(true)}>
                      <div className={classes.formButton}>
                        Create New Folder
                     </div>
                   </div>
                  </div>
               </div>
               </div>
         </div>
         <Modal setShow={setShow} show={show}>
               <FolderC setShow={setShow}/>
         </Modal>
      </div>
   )
}
