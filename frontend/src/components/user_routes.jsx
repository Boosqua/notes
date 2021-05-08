import React, { useEffect } from "react"
import Home from "./home/home"
import { Switch, Route, useRouteMatch } from "react-router"
import { useSelector, useDispatch } from "react-redux";
import {fetchFolders} from "../actions/folder_actions"
import { fetchNotes } from "../actions/note_actions"
import { setDataFetch } from "../actions/util_actions";
import Workspace from "./workspace/workspace"
export default function UserRoutes(props) {
   let { path } = useRouteMatch();
   const [dataFetch, userId] = useSelector( state => [state.util.dataFetch, state.session.user.id])
   const dispatch = useDispatch()
   useEffect(() => {
      if(!dataFetch){
         fetchFolders(userId)(dispatch)
            .then( () => fetchNotes(userId)(dispatch))
            .then(() => dispatch(setDataFetch(true)))
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