import {
  RECEIVE_NOTE,
  RECEIVE_NOTES,
  DELETE_NOTE
} from "../actions/note_actions";

export default function (state = {}, action) {
   Object.freeze(state)
   const newState = Object.assign({}, state)
   switch (action.type) {
      case RECEIVE_NOTES:
         const notes = {}
         action.notes.forEach( (note) => {
            if(!notes[note.folder]){
               notes[note.folder] = []
            }
            notes[note.folder].push(note)
         })
         return notes
      case RECEIVE_NOTE:
         if(!newState[action.note.folder]){
            newState[action.note.folder] = [action.note]
            return newState
         }
         const found = {found: false}
         const newNotes = newState[action.note.folder].map( (note) => {
            if(note._id === action.note._id){
               found.found = true
               return action.note
            }
            return note
         })
         if(!found.found) newNotes.push(action.note)
         newState[action.note.folder] = newNotes
         return newState
      case DELETE_NOTE:
         newState[action.note.folder] = newState[action.note.folder].filter(note => note._id !== action.note._id)
         return newState
      default:
         return state;
   }
}


