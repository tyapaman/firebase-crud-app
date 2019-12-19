//jsxを使用する場合はReactは必要
import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

//コンポーネントのpropsに対する型を定義
//Userの後である必要がある
User.propTypes = {
  name:PropTypes.string,
  //isRequiredは値が必ず存在していないといけない
  age:PropTypes.number.isRequired
}

//関数コンポーネント
const App = () =>{
  const profiles =[
    { name:"bob", age:10},
    { name:"hanako", age:"12"},
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



export default App;
