import { 
   ADD_VOTE
} from "./type";



const initialState = {
   whoToVote:[]
   
}

 

const reducer = (state = initialState, action) => {
   switch (action.type) { 
      case ADD_VOTE:
         return {
            ...state,
            whoToVote:action.payload
         } 
      default:return state
   }
}

export default reducer