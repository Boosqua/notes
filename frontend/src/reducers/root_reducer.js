import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import util from "./util_reducer"

const RootReducer = combineReducers({
  errors,
  session,
  util
});

export default RootReducer;