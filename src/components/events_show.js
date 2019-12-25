//jsxを使用する場合はReactは必要
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEvent,deleteEvent,putEvent } from '../actions/index'
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

//関数コンポーネント,引数にpropsを受け取る
class EventsShow extends Component{
  constructor(props){
    
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount(){
    const { id } = this.props.match.params
    if(id)this.props.getEvent(id);
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
    await this.props.putEvent(values)
    this.props.history.push('/')
  }

  async onDeleteClick(){
    //matchで拾う
    const {id} = this.props.match.params;
    //actionにidを渡す
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit, pristine, submitting,invalid} = this.props;
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
          <input type="submit" value="Submit" disabled={pristine || submitting || invalid}/>
          <Link to="/">Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps　= ({ deleteEvent,getEvent,putEvent });

const validate = values => {
  const errors = {}
  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."

  return errors
}

const mapStateToProps = (state, ownProps) =>{
  const event = state.events[ownProps.match.params.id]
  return { initialValues:event, event }
}

export default connect(mapStateToProps,mapDispatchToProps)(
  reduxForm({ validate, form:'eventNewForm',enableReinitialize: true})(EventsShow)
);
