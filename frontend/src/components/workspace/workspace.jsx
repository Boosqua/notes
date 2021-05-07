import React, {useState} from 'react';
import { createUseStyles } from 'react-jss';
import { useRouteMatch } from "react-router"
import { useSelector } from 'react-redux';

import Header from "../home/home_header"
import Editor from "../text_editor/editor"
import Sidebar from "../modal/sidebar"
import Button from "../reusable/button"

export default function Workspace(){
   const classes = useStyles({})
   const [collapse, setCollapse] = useState(false)
   const [animate, setAnimate] = useState(false)
   const [stall, setStall] = useState(false)
   
   return (
      <div className={classes.rowFlex}>
      <Sidebar animate={animate} collapse={collapse}>
         <WSSidebar/>
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
         <div className={classes.rowFlexInner}>
         <Editor/>
         </div>
         </div>
      </div>
   )
}

  const useStyles = createUseStyles({
   columnFlex: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      width: "100%"
   },
   rowFlex: {
      display: "flex",
      flexDirection: "row",
      width: "100vw",
      height: "100%"
   },
   rowFlexInner: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%"
   },
   wSSidebar: {
      width: 300,
      padding: 10,
      height: "100vh",
      overflowY: "scroll",
      border: "1px solid rgba(0,0,0,.1) "
   },
   wSHeader: {
      fontSize: 40,
      fontWeight: "bold",
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'center',
      marginBottom: 20
   },
   folderItem: {
      display: "flex",
      flexDirection: "row",
      fontSize: 22,
      padding: ".5em",
      margin: "0 .5em",
      borderRadius: 10,
      "&:hover": {
         background: options => options.hover ? "#e37d5e" : "inherit",
         cursor: options => options.hover ? "pointer" : "inherit"
      }
   },
   folderItemIcon: {
      marginRight: ".5em"
   },
   folderItemTitle: {
      width: "20em",
      overflow: "hidden",
      textOverflow: 'ellipsis',
      whiteSpace: "nowrap",
   },
   folderItemAdd: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: "100%",
      alignItems: 'center'
   },
   folderItemAddIcon: {
      marginRight: ".5em",
      "&:hover": {
         color: '#e37d5e',
         cursor: 'pointer'
      }
   }
})

function WSSidebar(props){
   const {params} = useRouteMatch();
   const folder = useSelector(state => state.folder[params.id])
   const user = useSelector(state => state.session.user)
   const classes = useStyles({})
   return (
      <div className={classes.wSSidebar}>
         <div className={classes.wSHeader}>
            {user.name}
         </div>
         <FolderItem folder={folder} open={true} add={true}/>
         <Button handleClick={() => console.log("clicked")} expand={true}>Create New Note</Button>
      </div>
   )
}

function FolderItem({folder, open=false, hover = false}){
   const {color, name} = folder
   const classes = useStyles({hover})
   return (
      <div className={classes.folderItem}>
         <div className={classes.folderItemIcon }style={{ color: color }}>
            {
               open ? 
               <i class="fas fa-folder-open"></i>
               :
               <i class="fas fa-folder"></i>
            }
         </div>
         <div className={classes.folderItemTitle}>
            {name}
         </div>
      </div>
   )
}