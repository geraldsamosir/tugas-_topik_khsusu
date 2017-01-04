import React, {Component}from 'react';
import linkState from 'react-link-state';
import { Form, Icon, Input, Button, Checkbox , Card} from 'antd';
import {browserHistory }  from  'react-router'
const FormItem = Form.Item;

 

export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            email :'',
            password :''
        }
    }
    componentDidMount(){
      
    }
    dologin(e){
        e.preventDefault();
        let _data = {
            email  : this.state.email,
            password : this.state.password
        }
        let result = this.props.action.login(_data)
        browserHistory.push('/@stok')
         
    }
    render(){
        return(
            <div>
                <br/><br/><br/>
                <center>
                <Card style={{ width: 300 }}  title="Login">
                    <Form ref="loginform" onSubmit={this.dologin.bind(this)} className="login-form" >
                        <FormItem>
                            <Input  addonBefore={<Icon type="mail" />} placeholder="Email" 
                            required valueLink={linkState(this,'email')}/>
                        </FormItem>
                        <FormItem>
                            <Input  addonBefore={<Icon type="lock" />} type="password" placeholder="Password" 
                            required valueLink={linkState(this,'password')}/>
                        </FormItem>
                        <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        </FormItem>
                    </Form>
                 </Card>
                 </center>
            </div>
        )
    }
}


