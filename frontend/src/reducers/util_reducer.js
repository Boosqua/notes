import { SET_LOADED } from "../actions/util_actions"

const initialState = {
   loaded: true
}

export default function( state = initialState, action ){
   switch (action.type){
      case SET_LOADED: 
         return {
            ...state,
            loaded: action.loaded
         };
      default:
         return state;
   }
}