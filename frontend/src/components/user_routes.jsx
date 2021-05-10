import React, { useEffect } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import {fetchFolders} from "../actions/folder_actions";
import { fetchNotes } from "../actions/note_actions";
import { setDataFetch } from "../actions/util_actions";

import Home from "./home/home";
import Workspace from "./workspace/workspace";
import NoteWorkspace from "./workspace/note_workspace";

export default function UserRoutes(props) {
   let { path } = useRouteMatch();
   const [dataFetch, userId] = useSelector( state => [state.util.dataFetch, state.session.user.id]);
   const dispatch = useDispatch();
   useEffect(() => {
      if(!dataFetch){
         fetchFolders(userId)(dispatch)
            .then( () => fetchNotes(userId)(dispatch))
            .then(() => dispatch(setDataFetch(true)))
      }
   }, []);

   return (
      dataFetch ?
      <Switch>
         <Route exact path={`${path}`} component={Home}/>
         <Route exact path={`${path}/folder/:id`} component={Workspace}/>
         <Route exact path={`${path}/folder/:id/note/:noteId`}>
            <NoteWorkspace path={path} />
         </Route>
         <Route path={`${path}/*`}>
            <Redirect to={'/@me'} />
         </Route>
      </Switch> 
      : 
      null
   )
}