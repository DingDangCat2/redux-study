import { List, Input, Divider ,Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import store from './store/store';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state=store.getState();
    console.log(store.getState());

  }
  change(e){
let action={
  'type':'INCREASE_PAGE',
  'value':e.target.input.value
}
store.dispatch(action);

this.setState(store.getState());

e.preventDefault();


  }

  delete(item){
let action2={
  'type':'DELETE_PAGE',
  'value':item
}
store.dispatch(action2); 
this.setState(store.getState());
  }

  reset(e){
e.target.value='';
  }

render(){
  return (
   
      <>
<form onSubmit={this.change.bind(this)}>
<Input placeholder="write" style={{'height':'50px'}} name='input' onBlur={this.reset.bind(this)}></Input>
<Button type='submit' name='submit' htmlType="submit">确定</Button>
</form>
  <Divider orientation="left">Large Size</Divider>
  <List
    size="large"
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    bordered
    dataSource={this.state.list}
    renderItem={(item,index )=> <List.Item onClick={this.delete.bind(this,index)}>{item}</List.Item>}
  />
</>
  )
      }
    }