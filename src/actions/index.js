import axious from 'axios';

//actionのタイプを指定する
export const actionsType={
  READ_EVENTS:'READ_EVENTS',
  CREATE_EVENT:'CREATE_EVENT',
  DELETE_EVENT:'DELETE_EVENT'
}

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERYSTRING = '?token=token123';

//actionオブジェクトを返すアクションクリエーターを作成
//thunkを実装することで関数をかえすことができる
export const readEvents = () => async dispatch => {
      const response = await axious.get(`${ROOT_URL}/events${QUERYSTRING}`)
      //actionはオブジェクト、dispatchは状態遷移の際に引数にactionを渡す決まり
      //具体的にどう変化するかはactionのtypeによる
      //dispatchを実行するとreducerが実行される
      //actionとresponseをreducerに渡している
      dispatch({type: actionsType.READ_EVENTS, response});
};

export const postEvent = values => async dispatch => {
      const response = await axious.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
      dispatch({type: actionsType.CREATE_EVENT, response});
};

export const deleteEvent = id => async dispatch => {
      const response = await axious.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
      //reducerにidを渡す
      dispatch({type: actionsType.DELETE_EVENT, id});
};