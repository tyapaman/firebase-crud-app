//reducerの状態を記述
import { actionsType } from '../actions';
import _ from 'lodash';

//reducerは(state, action)ととり、stateをどう変化させるかを記述する
//今回はstate=events
export default (events={}, action) =>{
  switch(action.type){
    case actionsType.UPDATE_EVENT:
    case actionsType.CREATE_EVENT:
    case actionsType.READ_EVENT:
      const data = action.response.data;
      return {...events, [data.id]:data};
    case actionsType.READ_EVENTS:
      //idの再配置
      return _.mapKeys(action.response.data,'id');
    case actionsType.DELETE_EVENT:
      delete events[action.id];
      return {...events};

    default:
      return events;
  }
}