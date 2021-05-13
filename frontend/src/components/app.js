import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import Testing from "./testing/testing"
import Landing from "./landing/landing"
import UserRoutes from "./user_routes"
import NoteShare from "./share/note_share"
const App = () => (
   <Switch>
      <Route exact path="/" component={Landing}/>
      <AuthRoute exact path="/login" component={Landing}/>
      <AuthRoute exact path="/signup" component={Landing}/>
      <ProtectedRoute path="/@me" component={UserRoutes}/>
      <Route exact path="/about" component={Landing} />
      <Route exact path="/testing" component={Testing} />
      <Route path="/shared_note/:id" component={NoteShare}/>
      <Route path="*">
         <Redirect to="/"/>
      </Route>
   </Switch>
);

export default App;