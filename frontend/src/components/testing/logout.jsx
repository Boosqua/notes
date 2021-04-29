import React from "react"
import { useDispatch } from "react-redux"
import {logout} from "../../actions/session_actions"
export default function Logout(props){
   const dispatch = useDispatch()
   return (
      <div onClick={(e) => {
         e.preventDefault()
         logout()(dispatch)
      }}>logout<div>Bruh</div></div>
   )
}