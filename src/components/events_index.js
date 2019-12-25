//jsxを使用する場合はReactは必要
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readEvents } from '../actions/index'
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

//関数コンポーネント,引数にpropsを受け取る
class EventsIndex extends Component{
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events,event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
        <Link to={`/events/${event.id}`}>
          {event.title}
        </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>

    ))
  }

  render(){
    //インスタンスのpropsには状態やアクションを渡す
    const style ={
      position: "fixed",
      right:12,
      bottom:12
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new"></Link>}>
          <ContentAdd></ContentAdd>
        </FloatingActionButton>
        <Table>
          {/* reducer内のcount.jsのvalueの値 */}
          {/* stateのvalueがCounterコンポーネントに渡ってくる際のインターフェースがprops（読み取り専用） */}
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Body</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              >
              {this.renderEvents()}
            </TableBody>
          </Table>
  
      </React.Fragment>
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
