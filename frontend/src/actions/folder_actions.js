import * as APIUtil from '../util/folder_util'

export const RECEIVE_FOLDERS = "RECEIVE_FOLDERS"
export const RECEIVE_FOLDER = "RECEIVE_FOLDER"
export const RECEIVE_FOLDER_ERRORS = "RECEIVE_FOLDER_ERRORS"
export const CLEAR_FOLDER_ERRORS = "CLEAR_FOLDER_ERRORS"
export const DELETE_FOLDER = "DELETE_FOLDER"


export const receiveFolders = (folders) => ({
   type: RECEIVE_FOLDERS,
   folders
});
export const receiveFolder = (folder) => ({
   type: RECEIVE_FOLDER,
   folder
})
export const removeFolder = (folderId) => ({
   type: DELETE_FOLDER,
   folderId
})
export const receiveFolderErrors = (error) => ({
   type: RECEIVE_FOLDER_ERRORS,
   error
})
export const clearFolderErrors = () => ({
   type: CLEAR_FOLDER_ERRORS,

})

export const fetchFolders = (userId) => (dispatch) =>
  APIUtil.fetchFolders(userId)
    .then((res) => dispatch(receiveFolders(res.data)))
    .catch((err) => dispatch(receiveFolderErrors(err.response.data)));
export const updateFolder = (folderData) => (dispatch) =>
  APIUtil.updateFolder(folderData)
    .then((res) => dispatch(receiveFolder(res.data)))
    .catch((err) => dispatch(receiveFolderErrors(err.response.data)));
export const createFolder = (folderData) => (dispatch) =>
  APIUtil.createFolder(folderData)
    .then((res) => dispatch(receiveFolder(res.data)))
    .catch((err) => dispatch(receiveFolderErrors(err.response.data)));
export const deleteFolder = (folderId) => (dispatch) =>
  APIUtil.deleteFolder(folderId)
    .then((res) => dispatch(removeFolder(res.data)))
    .catch((err) => dispatch(receiveFolderErrors(err.response.data)));
