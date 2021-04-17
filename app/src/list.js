import { List, Input, Divider ,Button } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import {connect} from 'react-redux';

class Lists extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
 
render(){
    return(
        <>
        <form onSubmit={this.props.click}>
        <Input type='text'  name='input'></Input>
        <Button type='submit' name='submit' htmlType="submit">提交</Button>
        </form>
        <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={this.props.value}
      renderItem={item => <List.Item >{item}</List.Item>}
    />
        </>
    )
}

}
const ListPage=(state)=>{
    return {
        'value':state.list
    }

}

const increasePage=(dispatch)=>{
    return{
        click(e){
            e.preventDefault();
            console.log(e.target.input.value);
            let action={
                'type':'ADD_PAGE',
                'value':e.target.input.value
            }
            dispatch(action);
        }
    }
}


export default connect(ListPage,increasePage)(Lists)