import React from "react"
import { createUseStyles } from "react-jss"
import { useDispatch, useSelector } from "react-redux"
import {logout} from "../../actions/session_actions"

export default function({setShow, show}) {
   const classes = useStyles({})
   const dispatch = useDispatch()
   const user = useSelector( state => state.session.user)
   return (
      show === true ? 
      <div className={classes.userC}>
         <div className={classes.rrFlex2}>
            <div className={classes.closeIcon} onClick={(e)=> {
               e.stopPropagation()
               setShow()
            }}>
               <i class="fas fa-times"></i>
            </div>
         </div>
         <div className={classes.header}>
            {user.name}
         </div>
         <div className={classes.info}>
            {`Member since ${parseDate(user.memberSince)}`}
         </div>

         <div className={classes.logoutButton} onClick={() => logout()(dispatch)}>
            Logout
         </div>
      </div>
      : 
      null
   )
}
function parseDate(data) {
   const date = new Date(data)
   return new Intl.DateTimeFormat('en-US').format(date)
}
const useStyles = createUseStyles({
   userC: {
      position: "absolute",
      top: "2em",
      right: 0,
      zIndex: 20,
      padding: 20,
      margin: "10px",
      color: "white",
      width: 200,
      background: "rgb(227 125 94)",
      border: "1px solid rgb(231 170 124)",
      borderRadius: 10,
      cursor: "auto",
   },
   rrFlex2: {
    display: "flex",
    flexDirection: "row-reverse",
    position: "relative",
    top: "-.5em",
    right: "-.5em",
    fontSize: 14
  },
  closeIcon: {
     marginLeft: "2em",
    "&:hover": {
      cursor: "pointer",
      color: "black",
      transition: "500ms",
    },
  },
  header: {
     fontSize: 30,
     borderBottom: "1px solid white"
  },
  info: {
     fontSize: 14,
     margin: 10
  },
  logoutButton: {
     padding: ".5em",
     background: "#42b4a2",
     borderRadius: "10px",
     width: "fit-content",
     fontSize: 20,
     boxShadow: "1px 1px 4px #808080",
      marginLeft: 5,
     "&:hover": {
        cursor: "pointer",
     }
  }
})