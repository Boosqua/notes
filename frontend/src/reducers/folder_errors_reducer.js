import {
   RECEIVE_FOLDER_ERRORS,
   RECEIVE_FOLDER,
   CLEAR_FOLDER_ERRORS
} from "../actions/folder_actions";

const _nullErrors = [];

const folderErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FOLDER_ERRORS:
      return action.error;
    case RECEIVE_FOLDER:
    case CLEAR_FOLDER_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};

export default folderErrorsReducer
