import axios from 'axios';

export const fetchFolders = (userId) => {
   return axios.get(`/api/folders/index/${userId}`)
}

export const createFolder = (folderData) => {
   return axios.post('/api/folders/create', folderData)
}

export const updateFolder = (folderData) => {
   return axios.patch( `/api/folders/update/${folderData._id}`, folderData )
}

export const deleteFolder = (folderId) => {
   return axios.delete( `/api/folders/destroy/${folderId}`)
}