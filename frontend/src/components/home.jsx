import React from "react"
import Sidebar from "./sidebar/sidebar"
import { createUseStyles } from "react-jss"

export default function Logout(props){
   const classes = useStyles()
   return (
      <div className={classes.home}>
         <Sidebar/>
      </div>
   )
}

const useStyles = createUseStyles({
   home: {
      display: 'flex',
      position: 'fixed',
      left: 0,
      top: 0,
      flexDirection: 'row',
      width: "100vw",
      boxShadow: "0 5px 10px rgba(8, 159, 154, .25)",
      zIndex: 1,
      fontSize: 20
   }})