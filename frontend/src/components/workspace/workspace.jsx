import React, {useState} from 'react';
import { createUseStyles } from 'react-jss';
import Header from "../home/home_header"
import Editor from "../text_editor/editor"
import CustomToolbar from "../text_editor/custom_toolbar"
export default function Workspace(){
   const classes = useStyles({})
   const [show, setShow] = useState(false)
   const [collapse, setCollapse] = useState(false)
   const [animate, setAnimate] = useState(false)
   const [stall, setStall] = useState(false)
   
   return (
      <div className={classes.homeContainer}>
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
            }, 750)
         }}/>
         <CustomToolbar></CustomToolbar>
         <Editor/>
      </div>
   )
}

  const useStyles = createUseStyles({homeContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  }})