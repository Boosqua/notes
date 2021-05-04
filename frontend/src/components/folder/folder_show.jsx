import React, { useState } from "react"
import useStyles from "./styles"
import { useSelector } from "react-redux";
function parseDate(data) {
   const date = new Date(data)
   return new Intl.DateTimeFormat('en-US').format(date)
}

export default function FolderShow({header}){
   const folders = useSelector(state => Object.values(state.folder))
   const [shown, setShown] = useState(0)
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
                        {
                           data ?
                              <div className={classes.folderDate}>
                                 <div>{`Created on: ${created}`}</div>
                                 <div>{`Last Modified on: ${update}`}</div>
                                 <div>{`Visibility: ${folder.public? "Public" : "Private"}`}</div>
                              </div>
                              :
                              null
                        }
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
                        </div>
                        <div className={classes.folderDocuments}>
                           <div className={classes.folderRow}>Folder Tags </div>
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
                     </div>
                     :
                     null
                  }
               </div>
            )}
         )
         }
         
      </div>
   )
}
