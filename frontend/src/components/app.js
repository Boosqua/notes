import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import Testing from "./testing/testing"
const App = () => (
  <div>
     <Testing/>
  </div>
);

export default App;