//全reducerを結合する
//今回はcount reducerのみ
import { combineReducers } from 'redux';
import count from './count';

//{count:count}
export default combineReducers({count});