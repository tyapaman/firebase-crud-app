//reducerの状態を記述
import { actionsType } from '../actions';
import _ from 'lodash';

export default (events={}, action) =>{
  switch(action.type){
    case actionsType.READ_EVENTS:
      return _.mapKeys(action.response.data,'id');

    default:
      return events;
  }
}