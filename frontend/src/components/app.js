import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Testing from "./testing/testing"
import Landing from "./landing/landing"
const App = () => (
  <div>
     {/* <Testing/> */}
     <Landing />
  </div>
);

export default App;