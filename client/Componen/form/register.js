import React, {Component}from 'react';
import linkState from 'react-link-state';
import { Form, Icon, Input, Button, Checkbox , Card} from 'antd';


const FormItem = Form.Item;


export default class Register extends Component{

    constructor(){
        super();
        this.state = {
            email  :'',
            password  :'',
            Username:''
        }
    }

   doregister(e){
       e.preventDefault();
       let _data = {
           username : this.state.Username,
           password : this.state.password,
           email : this.state.email
       }
       let result = this.props.action.register(_data)
       browserHistory.push('/@stok')
   }
    render(){
        return(
            <div>
                <br/><br/><br/>
                <center>
                <Card  style={{ width: "80%" }}  title="Register">
                    <Form onSubmit={this.doregister.bind(this)} className="Register-form" >
                        <FormItem>
                            <Input addonBefore={<Icon type="user" />} placeholder="Username" 
                            required  valueLink={linkState(this,'Username')}/>
                        </FormItem>
                        <FormItem>
                            <Input addonBefore={<Icon type="mail" />} placeholder="Email" 
                            required valueLink={linkState(this,'email')}/>
                        </FormItem>
                        <FormItem>
                            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" 
                            required valueLink={linkState(this,'password')} />
                        </FormItem>
                        <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                        </FormItem>
                    </Form>
                 </Card>
                 </center>
            </div>
        )
    }
}


