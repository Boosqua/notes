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
            newState[action.note.folder] = []
         }
         for( let i = 0; i < newState[action.note.folder].length; i++ ){
            if(newState[action.note.folder][i]._id === action.note._id){
               newState[action.note.folder][i] = action.note
               return newState
            }
         }
         newState[action.note.folder].push(action.note)
         return newState
      case DELETE_NOTE:
         newState[action.note.folder] = newState[action.note.folder].filter(note => note._id !== action.note._id)
         return newState
      default:
         return state;
   }
}
