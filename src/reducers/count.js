//reducerの状態を記述
import { actionsType } from './index';

const initialState = { value:0 }

export default (state=initialState, action) =>{
  switch(action.type){
    case actionsType.INCREMENT:
      return {value:state.value+1};

    case actionsType.DECREMENT:
      return {value:state.value-1};
    
    default:
      return state;
  }
}