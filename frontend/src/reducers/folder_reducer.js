import {
  RECEIVE_FOLDER,
  RECEIVE_FOLDERS,
  DELETE_FOLDER
} from "../actions/folder_actions";

export default function (state = {}, action) {
      Object.freeze(state)
      const newState = Object.assign({}, state)
   switch (action.type) {
      case RECEIVE_FOLDERS:
         const folders = {}
         action.folders.forEach( folder => folders[folder._id] = folder)
         return folders
      case RECEIVE_FOLDER:
         newState[action.folder._id] = action.folder
         return newState
      case DELETE_FOLDER:
         delete newState[action.folderId.folderId]
         return newState
      default:
         return state;
   }
}
