import * as APIUtil from "../util/note_util";

export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";
export const CLEAR_NOTE_ERRORS = "CLEAR_NOTE_ERRORS";
export const DELETE_NOTE = "DELETE_NOTE";

export const receiveNotes = (notes) => ({
  type: RECEIVE_NOTES,
  notes,
});
export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note,
});
export const removeNote = (note) => ({
  type: DELETE_NOTE,
  note,
});
export const receiveNoteErrors = (error) => ({
  type: RECEIVE_NOTE_ERRORS,
  error,
});
export const clearNoteErrors = () => ({
  type: CLEAR_NOTE_ERRORS,
});

export const fetchNotes = (userId) => (dispatch) =>
  APIUtil.fetchNotes(userId)
    .then((res) => dispatch(receiveNotes(res.data)))
    .catch((err) => dispatch(receiveNoteErrors(err.response.data)));
export const updateNote = (noteData) => (dispatch) =>
  APIUtil.updateNote(noteData)
    .then((res) => dispatch(receiveNote(res.data)))
    .catch((err) => dispatch(receiveNoteErrors(err.response.data)));
export const createNote = (folderData) => (dispatch) =>
  APIUtil.createNote(folderData)
    .then((res) => dispatch(receiveNote(res.data)))
    .catch((err) => dispatch(receiveNoteErrors(err.response.data)));
export const deleteNote = (folderId, note) => (dispatch) =>
  APIUtil.deleteNote(folderId)
    .then((res) => dispatch(removeNote(note)))
    .catch((err) => dispatch(receiveNoteErrors(err)));
