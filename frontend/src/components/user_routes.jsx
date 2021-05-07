import React, { useEffect } from "react"
import Home from "./home/home"
import { createUseStyles } from "react-jss"
import { Switch, Route, useRouteMatch } from "react-router"
import { useSelector, useDispatch } from "react-redux";
import {fetchFolders} from "../actions/folder_actions"
import { setDataFetch } from "../actions/util_actions";
import Workspace from "./workspace/workspace"
export default function UserRoutes(props) {
   let { path, url } = useRouteMatch();
   const [dataFetch, userId] = useSelector( state => [state.util.dataFetch, state.session.user.id])
   const dispatch = useDispatch()
   useEffect(() => {
      if(!dataFetch){
         fetchFolders(userId)(dispatch).then(() => dispatch(setDataFetch(true)))
      }
   }, [])
   return (
      dataFetch ?
      <Switch>
         <Route exact path={`${path}`} component={Home}/>
         <Route path={`${path}/folder/:id`} component={Workspace}/>
      </Switch> 
      : 
      null
   )
}



// logout(props){
//    const classes = useStyles()
//    return (
//       <div className={classes.home}>
//          <Sidebar/>
//       </div>
//    )
// }

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