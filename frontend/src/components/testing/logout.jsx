import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {clearSessionErrors, logout} from "../../actions/session_actions"
import useStyles from "./styles"

export default function Logout(props){
   const dispatch = useDispatch()
   const [animate, setAnimate] = useState(false)
   const [faceL, setFaceL] = useState(true)
   const styles = useStyles()
   return (
      <div className={styles.hGrid}>
         <div className={`${styles.hL}`}>
            <i class="fas fa-camera"></i>
         </div>
         <div className={`${styles.hC}`}>
            <div className={styles.heButtons} onClick={() => {
               if(!animate) {
                  setAnimate(true)
                  setTimeout(() => setAnimate(false), 1000)
               }
               setFaceL(!faceL)
            }}>
               <div className={animate ? styles.heSpin: ""}>
                  <i class={faceL ? "fas fa-chevron-left" : "fas fa-chevron-right"}></i>
               </div>
            </div>
         </div>
         <div className={`${styles.hR}`}>
            <i class="fas fa-camera"></i>
         </div>
      </div>
   )
}