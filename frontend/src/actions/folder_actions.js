import * as APIUtil from '../util/folder_util'

export const RECEIVE_FOLDERS = "RECEIVE_FOLDERS"
export const RECEIVE_FOLDER = "RECEIVE_FOLDER"
export const RECEIVE_FOLDER_ERRORS = "RECEIVE_FOLDER_ERRORS"
export const CLEAR_FOLDER_ERRORS = "CLEAR_FOLDER_ERRORS"


export const receiveFolders = (folders) => ({
   type: RECEIVE_FOLDERS,
   folders
});
export const receiveFolder = (folder) => ({
   type: RECEIVE_FOLDER,
   folder
})
export const receiveFolderErrors = (error) => ({
   type: RECEIVE_FOLDER_ERRORS,
   error
})
export const clearFolderErrors = () => ({
   type: CLEAR_FOLDER_ERRORS,

})

export const fetchFolders = (userId) => (dispatch) => (
   APIUtil.fetchFolders(userId)
      .then(folders => dispatch(receiveFolders(folders)))
      .catch(err => dispatch(receiveFolderErrors(err)))
)
export const updateFolder = (folderData) => (dispatch) => (
   APIUtil.updateFolder(folderData)
      .then(folder => dispatch(receiveFolder(folder)))
      .catch(err => dispatch(receiveFolderErrors(err)))
)
export const createFolder = (folderData) => (dispatch) => (
   APIUtil.createFolder(folderData)
      .then(folder => dispatch(receiveFolder(folder)))
      .catch(err => dispatch(receiveFolderErrors(err)))
)
