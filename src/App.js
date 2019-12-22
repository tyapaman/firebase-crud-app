//jsxを使用する場合はReactは必要
import React, { Component } from 'react';


//関数コンポーネント,引数にpropsを受け取る
class Counter extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }

  handlePlusButton = () =>{
    //setStateが実行されるとrender関数が実行される
    this.setState({count:this.state.count+1});
  }

  handleMinasButton = () =>{
    //setStateが実行されるとrender関数が実行される
    this.setState({count:this.state.count-1});
  }

  render(){
    return (
      <React.Fragment>
        <div>count:{this.state.count}</div>
        {/* thisはCounterClassのこと */}
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinasButton}>-1</button>
      </React.Fragment>
    );
  }
}

//関数コンポーネント
const App = () =>(<Counter></Counter>);

export default App;
