//jsxを使用する場合はReactは必要
import React, { Component } from 'react';

//関数コンポーネント,引数にpropsを受け取る
const User = (props) =>{
  // (はreturnのすぐ後にないとダメ！改行するとエラ-
  return (
    <div>
      {/* propsを受け取る */}
      I am {props.name}!<br/>
      I am {props.age} years old!<br/>
      <br/>
    </div>
  );
}

//関数コンポーネント
const App = () =>{
  const profiles =[
    { name:"bob", age:10},
    { name:"hanako", age:12},
    { name:"kato"}
  ]
  return (
  <React.Fragment>
    {/* Userコンポーネントにたいしてpropsを渡せる */}
    {
     profiles.map((profile,index)=>{
        //<User>の中はJSXでJSX内の{}はjavascript
        //props名を定義しコンポーネントにpropsを渡している
        return <User name={profile.name} age={profile.age} key={index} />;
      })
    }
  </React.Fragment>
  );
}

//defaultpropsで初期値を設定できる
User.defaultProps={
  age:1
}


export default App;
