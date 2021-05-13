import {
  RECEIVE_SHARED_NOTE
} from "../actions/note_actions";

export default function (state = {note: {_id: null}}, action) {
   Object.freeze(state)
   const newState = Object.assign({}, state)

   switch (action.type) {
      case RECEIVE_SHARED_NOTE:
         newState.note = action.note
         return newState
      default:
         return state;
   }
}


