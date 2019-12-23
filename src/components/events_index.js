//jsxを使用する場合はReactは必要
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions/index'
import _ from 'lodash';

//関数コンポーネント,引数にpropsを受け取る
class EventsIndex extends Component{
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events,event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>

    ))
  }

  render(){
    //インスタンスのpropsには状態やアクションを渡す
    return (
      <table>
        {/* reducer内のcount.jsのvalueの値 */}
        {/* stateのvalueがCounterコンポーネントに渡ってくる際のインターフェースがprops（読み取り専用） */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
    );
  }
}

//stateとactionをコンポーネントに関連づける
//stateの情報からこのコンポーネントで必要な情報を取り出してコンポーネント内のpropsにマッピングする
//state.count.valueのcountプロパティはsrc/reducers.index.jsのcombineReducerに渡しているcount
//引数のstateの属性と{count:count}の属性に対応している
//stateの値を受け取るのに必要な関数
const mapStateToProps　= (state) =>({events:state.events});

//actionを発生させる際にdispachに引数として渡す
//const mapDispatchToProps　= (dispatch) =>({
//  increment: ()=>dispatch(increment()),
//  decrement: ()=>dispatch(decrement())
//});

const mapDispatchToProps　= ({ readEvents });

export default connect(mapStateToProps,mapDispatchToProps)(EventsIndex);
