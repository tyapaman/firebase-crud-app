//全reducerを結合する
//今回はcount reducerのみ
import { combineReducers } from 'redux';
import events from './events';

//{count:count}
export default combineReducers({events});