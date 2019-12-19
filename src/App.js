//jsxを使用する場合はReactは必要
import React, { Component } from 'react';

//Classコンポーネント
//class App extends Component {
//  render() {
//    return (
//      // React.Fragmentで余計なタグを出力せずに済む
//      <React.Fragment>
//        {/* htmlForはラベルとフォームパーツの関連づけ */}
//        <label htmlFor="name">名前</label>
//        <input id="name" type="text" onChange={(event)=>{console.log(event.target.value)}}/>
//      </React.Fragment>
//    );
//  }
//}

//関数コンポーネント
const Cat = () =>{
  return <div>にゃー</div>
}

//関数コンポーネント
const App = () =>{
  return (
  <React.Fragment>
    <Cat />
    <Cat />
    <Cat />
    <Cat />
    <Cat />
  </React.Fragment>
  );
}

export default App;
