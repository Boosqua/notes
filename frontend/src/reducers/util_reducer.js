import { SET_LOADED, SET_DATA_FETCH } from "../actions/util_actions"

const initialState = {
   loaded: true,
   dataFetch:false,
   currentNote: {_id: null}
}

export default function( state = initialState, action ){
   switch (action.type){
      case SET_LOADED: 
         return {
            ...state,
            loaded: action.loaded
         };
      case SET_DATA_FETCH: 
         return {
            ...state,
            dataFetch: action.dataFetch
         };
      case 'SET_CURRENT_NOTE':
         return {
            ...state,
            currentNote: action.note
         }
      default:
         return state;
   }
}