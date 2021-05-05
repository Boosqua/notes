import axios from "axios";

export const fetchNotes = (userId) => {
  return axios.get(`/api/notes/index/${userId}`);
};

export const createNote = (noteData) => {
  return axios.post("/api/notes/create", noteData);
};

export const updateNote = (noteData) => {
  return axios.patch(`/api/notes/update/${noteData._id}`, noteData);
};

export const deleteNote = (noteId) => {
  return axios.delete(`/api/notes/destroy/${noteId}`);
};
