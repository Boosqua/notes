import React from "react";

import useStyles from "./styles"

export default function FolderItem({folder, open=false, hover = true, onClick }){
   const {color, name} = folder
   const classes = useStyles({hover, open})
   return (
      <div className={classes.folderItem} onClick={onClick}>
         <div className={classes.itemIcon } style={{ color: color }}>
            {
               open ? 
               <i class="fas fa-folder-open"></i>
               :
               <i class="fas fa-folder"></i>
            }
         </div>
         <div className={classes.itemTitle}>
            {name}
         </div>
      </div>
   )
}