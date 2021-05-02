import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {clearSessionErrors, logout} from "../../actions/session_actions"
import Toolbar from "../text_editor/custom_toolbar"
import useStyles from "./styles"

export default function Sidebar(props){
   const dispatch = useDispatch()
   const [animate, setAnimate] = useState(false)
   const [collapse, setCollapse] = useState(false)
   const styles = useStyles()

   return (
         <div className={`${styles.hL}`}>
            <Toolbar>
            <div className={styles.heButtons} onClick={() => {
               if(!animate) {
                  setAnimate(true)
                  setTimeout(() => setAnimate(false), 500)
               }
               setCollapse(!collapse)
            }}>
               <div className={animate ? styles.heSpin: ""}>
                  <i class={collapse ? "fas fa-chevron-right" : "fas fa-chevron-left"}></i>
               </div>
            </div>
            </Toolbar>
         </div>
   )
}

