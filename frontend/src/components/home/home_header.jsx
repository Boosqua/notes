import React, { useState } from "react"
import useStyles from "./styles"
import UserShow from "../user_show/user_show"
import Modal from "../modal/modal"
export default function HomeHeader({setCollapse, header, collapse}) {
   const [style, setStyle] = useState(collapse)
   const classes = useStyles({collapse: !style});
   const [show, setShow] = useState(false)
   return (
      <div className={classes.homeHC}>
         <div className={classes.menuIcon} onClick={() => {
            setCollapse()
            setStyle(!style)
            }}> 
            <i class="fas fa-bars"></i> 
            </div>
         <div className={classes.homeHeader}>{header}</div>
         <div className={classes.rightFlex}>
         <div className={classes.infoIcon} 
         style={{color: show ? "#e27d5e" : "white"}}
         onClick={() => setShow(true)}><i class="fas fa-user">
            <UserShow setShow={ () => {
               setShow(false)
               } } show={show}/>   
         </i></div>
         </div>
         <Modal show={show} setShow={() => setShow(false)} />
      </div>
   )
}
