//jsxを使用する場合はReactは必要
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement} from '../actions/index'

//関数コンポーネント,引数にpropsを受け取る
class Counter extends Component{

  render(){
    //インスタンスのpropsには状態やアクションを渡す
    const props = this.props;
    return (
      <React.Fragment>
        {/* reducer内のcount.jsのvalueの値 */}
        <div>value:{props.value}</div>
        {/* thisはCounterClassのこと */}
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

//stateとactionをコンポーネントに関連づける
//stateの情報からこのコンポーネントで必要な情報を取り出してコンポーネント内のpropsにマッピングする
const mapStateToProps　= (state) =>({value:state.count.value});

//actionを発生させる際にdispachに引数として渡す
//const mapDispatchToProps　= (dispatch) =>({
//  increment: ()=>dispatch(increment()),
//  decrement: ()=>dispatch(decrement())
//});

const mapDispatchToProps　= ({ increment,decrement});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
