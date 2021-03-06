import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import util from "./util_reducer"
import folder from './folder_reducer'
import note from "./note_reducer"
import shared from "./shared_reducer"


const RootReducer = combineReducers({
  errors,
  session,
  util,
  folder,
  note,
  shared
});

export default RootReducer;