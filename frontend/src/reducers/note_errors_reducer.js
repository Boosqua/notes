import {
   RECEIVE_NOTE_ERRORS
} from "../actions/note_actions";

const _nullErrors = [];

export default function (state = _nullErrors, action) {
  switch (action.type) {
    case RECEIVE_NOTE_ERRORS:
       debugger
       return action.errors
    default:
      return state;
  }
}
