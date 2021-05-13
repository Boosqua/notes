import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import FoldersErrorsReducer from "./folder_errors_reducer"
import NotesErrorsReducer from "./note_errors_reducer"

export default combineReducers({
  session: SessionErrorsReducer,
  folders: FoldersErrorsReducer,
  notes: NotesErrorsReducer
});