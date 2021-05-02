import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import FoldersErrorsReducer from "./folder_errors_reducer"
export default combineReducers({
  session: SessionErrorsReducer,
  folders: FoldersErrorsReducer
});