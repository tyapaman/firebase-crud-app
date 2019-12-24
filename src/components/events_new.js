//jsxを使用する場合はReactは必要
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postEvent } from '../actions/index'
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

//関数コンポーネント,引数にpropsを受け取る
class EventsNew extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderField(field){
    const { input,label,type,meta: {touched,error}} = field
    return(
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
    )
  }

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit, pristine, submitting} = this.props;
    //インスタンスのpropsには状態やアクションを渡す
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={this.renderField}></Field>
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={this.renderField}></Field>
        </div>
        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting}/>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    );
  }
}

//actionを発生させる際にdispachに引数として渡す
//const mapDispatchToProps　= (dispatch) =>({
//  increment: ()=>dispatch(increment()),
//  decrement: ()=>dispatch(decrement())
//});

const mapDispatchToProps　= ({ postEvent });

const validate = values => {
  const errors = {}
  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."

  return errors
}

export default connect(null,mapDispatchToProps)(
  reduxForm({ validate, form:'eventNewForm'})(EventsNew)
);
