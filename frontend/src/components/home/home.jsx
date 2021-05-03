import React, { useState } from "react"
import HomeHeader from "./home_header"
import useStyles from "./styles"
import { useSelector } from "react-redux";
import FolderIndex from "../folder/folder_index"
export default function Testing(props){
   const [collapse, setCollapse] = useState(false)
   const classes = useStyles({collapse: collapse});
   const username = useSelector(state => state.session.user.name)
   const welcomeMessage = username[username.length - 1] === 's' ? 
      `${username}' Workspaces` :
      `${username}'s Workspaces`
   return(
      <div className={classes.TestContainer}>
         <div className={classes.testMenu}><FolderIndex></FolderIndex></div>
         <HomeHeader header={welcomeMessage} setCollapse={() => {setCollapse(!collapse)}}/>
      </div>
   )
}