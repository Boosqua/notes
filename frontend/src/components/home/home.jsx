import React, { useState } from "react"
import HomeHeader from "./home_header"
import useStyles from "./styles"
import { useSelector } from "react-redux";
import FolderIndex from "../folder/folder_index"
export default function Testing(props){
   const [collapse, setCollapse] = useState(false)
   const [animate, setAnimate] = useState(false)
   const [stall, setStall] = useState(false)
   const classes = useStyles({collapse: collapse});
   const username = useSelector(state => state.session.user.name)
   const welcomeMessage = username[username.length - 1] === 's' ? 
      `${username}' Workspaces` :
      `${username}'s Workspaces`
   return(
      <div className={classes.homeContainer}>
         <HomeHeader header={welcomeMessage} 
         collapse={collapse}
         setCollapse={() => {
            if(stall) return
            setStall(true)
            setAnimate(true)
            setTimeout(() => {
               setCollapse(!collapse)
               setAnimate(false)
               setStall(false)
            }, 750)
         }}/>
         <div className={classes.folderMenu}><FolderIndex animate={animate} collapse={collapse}></FolderIndex></div>
      </div>
   )
}