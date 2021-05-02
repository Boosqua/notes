import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import Testing from "./testing/testing"
import Landing from "./landing/landing"
import Home from "./home"

const App = () => (
   <Switch>
      <Route exact path="/" component={Landing}/>
      <AuthRoute exact path="/login" component={Landing}/>
      <AuthRoute exact path="/signup" component={Landing}/>
      <ProtectedRoute path="/@me" component={Home}/>
      <Route exact path="/about" component={Landing} />
      <Route exact path="/testing" component={Testing} />
   </Switch>
);

export default App;