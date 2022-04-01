import { 
   ADD_VOTE
} from "./type";

export const add_votes = (payload) => {
  return {
     type: ADD_VOTE,
     payload
  };
};