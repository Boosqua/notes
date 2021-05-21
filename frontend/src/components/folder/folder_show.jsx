import React, { useEffect, useState } from "react"
import useStyles from "./styles"
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/modal"
import FolderC from "./folder_c"
import { deleteFolder } from "../../actions/folder_actions"
import {Link} from "react-router-dom"
function parseDate(data) {
   const date = new Date(data)
   return new Intl.DateTimeFormat('en-US').format(date)
}

export default function FolderShow({header}){
   const folders = useSelector(state => Object.values(state.folder).sort( (a,b) => {
      if( a.updatedAt > b.updatedAt ){
         return -1
      } else {
         return 1
      }
   }))
   const notes = useSelector( state => state.note)
   const [modal, setModal] = useState(false);
   const [edit, setEdit] = useState({ oldName: "", oldAllTags: [], oldColor: "white", _id: null})
   const [remove, setRemove] = useState({show: false, folder: null})
   const [shown, setShown] = useState(null)
   const [data, setData] = useState(false)
   const [doc, setDoc] = useState(false)
   const [animate, setAnimate] = useState(false)
   const [animateDoc, setAnimateDoc] = useState(false)
   const classes = useStyles({animate, data, animateDoc, doc})
   return (
      <div className={classes.folderShowC}>
         <div className={classes.showHM}>
            {header}
         </div>
         {
            folders.map((folder, idx) => {
               const created = parseDate(folder.createdAt)
               const update = parseDate(folder.updatedAt)
               const allTags = folder.tags
               return (
               <div className={classes.folderContainer} key={idx}>
                  <div className={classes.folderContainerH} 
                  style={idx === shown? {borderBottom: "1px solid rgba(0,0,0,0)", color: "#e27d5e" } : {}}
                  onClick={()=> {
                     shown === idx? setShown(null) : setShown(idx)
                     if( shown === idx ) {
                        setShown(null)
                        setAnimate(false)
                        setData(false)
                     } else {
                        setShown(idx)
                     }
                  }}
                  >
                     <span style={{color: folder.color? folder.color : "green"}}>
                        <i class="fas fa-folder"></i> 
                     </span>
                     <div className={classes.folderName}>
                        {folder.name}
                     </div>
                  </div>
                  {
                     shown === idx ? 
                     <div className={classes.folderInfoC}>
                        <div className={classes.folderRow} onClick={() => {
                           setData(!data)
                           if(!animate) setAnimate(true)
                        }}>
                           <div className={classes.folderInfoH}>Folder Data</div>
                           {  data ? 
                              <div className={classes.arrow}><i  class="fas fa-chevron-down"></i></div>
                              : 
                              <div className={classes.arrow}><i class="fas fa-chevron-right"></i></div>
                           }
                        </div>
                        
   
                              <div className={classes.folderDate}>
                                 <div 
                                 className={classes.menuAni}

                                 
                                 >{`Created on: ${created}`}</div>
                                 <div 
                                 className={classes.menuAni}

                                 >{`Last Modified on: ${update}`}</div>
                                 <div 
                                 className={classes.menuAni}

                                 >{`Visibility: ${folder.public? "Public" : "Private"}`}</div>
                              </div>
                              
                        
                        <div className={classes.folderDocuments}>
                           <div className={classes.folderRow} onClick={()=> {
                              setDoc(!doc)
                              if(!animateDoc) setAnimateDoc(true)
                           }}>
                              <div className={classes.folderInfoH}>Folder Documents</div>
                              {  doc ? 
                                 <div className={classes.arrowDoc}><i  class="fas fa-chevron-down"></i></div>
                                 : 
                                 <div className={classes.arrowDoc}><i class="fas fa-chevron-right"></i></div>
                              }
                           </div>
                            {
                              doc ? 
                              <div className={classes.folderDoc}>
                                 {
                                    notes[folder._id] ?
                                    notes[folder._id].map( (note) => (
                                       <Link to={`/@me/folder/${note.folder}/note/${note._id}`} key={note._id}>
                                          <div className={classes.noteRow}>
                                             <div className={classes.noteIcon} style={{color: note.color}}>
                                                <i class="fas fa-file-alt"/>
                                             </div>
                                             <div>
                                                {note.name}
                                             </div>
                                          </div>
                                       </Link>
                                    ))
                                    :
                                    <div>You Haven't Added Any Notes Yet!</div>
                                 }
                              </div>
                              : 
                              null
                           }
                        </div>
                        <div className={classes.folderDocuments} >
                           <div style={{cursor: "auto"}} className={classes.folderRow}>Folder Tags</div>
                        </div>
                        <div className={classes.tagGrid}>
                           {allTags.map( (tag, i) => (
                              <div className={classes.tags}key={i}>
                                 <div className={classes.tagContent}>
                                    {tag}
                                 </div>
                              </div>
                           ))}
                        </div>
                           <div className={classes.buttonMargin}>
                           <Link to={`/@me/folder/${folder._id}`} className={classes.tagButton}>
                              Open Folder
                           </Link >
                           </div>
                        <div className={classes.buttonMargin}>
                        <div 
                        className={classes.tagButton}
                        onClick={() => {
                           setEdit({
                              oldName: folder.name,
                              oldColor: folder.color,
                              oldAllTags: allTags,
                              _id: folder._id
                           })
                           setModal(true)
                        }}
                        >Edit Folder</div>
                        </div>
                        <div className={classes.buttonMargin}>
                        <div 
                        className={classes.tagButton} 
                        style={{backgroundColor: "red"}}
                        onClick={() => {
                           setRemove({show: true, folder: folder})
                        }}
                        >
                           Delete Folder
                        </div>
                        </div>
                     </div>
                     :
                     null
                  }
               </div>
            )}
         )
         }
         <Modal show={modal} setShow={() => {
            setModal(false)
            setEdit({ name: "", allTags: [], color: "white", _id: null})
         }} >
            
            <FolderC 
            edit={true}
            setShow={() => {
            setShown(null)
            setModal(false)
            setEdit({ name: "", allTags: [], color: "white", _id: null})
         }} 
         {...edit}
         />
         </Modal>
         <Modal show={remove.show} setShow={()=> {
            setRemove({show: false, folder: null})
         }} >
            <DeleteFolder closeModal={() => {
                           setRemove({show: false, folder: null})
                        }}folder={remove.folder}/>
         </Modal>
      </div>
   )
}


function DeleteFolder({folder=null, closeModal}){
   const {name, _id} = folder ? folder : {name: null, id: null}

   const dispatch = useDispatch()
   const [color, setColor] = useState(false)
   const [buttonText, setButtonText] = useState("3..")
   useEffect(() => {
      setTimeout(() => setButtonText("2..."), 1000)
      setTimeout(() => setButtonText("1..."), 2000)
      setTimeout(() => {
         setButtonText("Delete Folder")
         setColor(true)
      }, 3000)

   }, [])
   const classes = useStyles({})
   return( folder ?
      <div className={classes.deleteC}>
         <div className={classes.deleteHeader}>
         Are you sure you want to delete 
         <span style={{color: 'red'}}>
         {` ${name}`}
         </span>
         ?
         </div>
         <div className={classes.deleteWarning}>
            Deleting a folder will also delete all associated documents. This action cannot be undone!
         <div 
            className={classes.tagButton} 
            style={{backgroundColor: "red", width: "7em", color: "white", marginTop: "10px", opacity: color ? "1":".5"}}
            onClick={() => {
               if(buttonText !== "Delete Folder") return
                  deleteFolder(_id)(dispatch).then( () => {
                  closeModal()
               })
            }}
            >
               {buttonText}
            </div>
         </div>
         
      </div>
      :
      null
   )
}