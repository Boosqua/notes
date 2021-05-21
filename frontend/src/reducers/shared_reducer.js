import {
  RECEIVE_SHARED_NOTE
} from "../actions/note_actions";

export default function (state = {_id: null}, action) {
   Object.freeze(state)
   const newState = Object.assign({}, state)

   switch (action.type) {
      case RECEIVE_SHARED_NOTE:
         return action.note
      default:
         return state;
   }
}


