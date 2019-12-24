//全reducerを結合する
//今回はcount reducerのみ
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import events from './events';

//{count:count}
export default combineReducers({events, form});