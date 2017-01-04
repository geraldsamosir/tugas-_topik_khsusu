import React, {Component}from 'react';
import {browserHistory} from 'react-router';
import linkState from 'react-link-state';
import { Form, Icon, Input, Button, Checkbox , Card , Select} from 'antd';
//import {Dropzone} from 'react-dropzone'
const FormItem = Form.Item;
const Dropzone = require('react-dropzone')



export default class Stok extends Component{
    constructor(){
        super()
        this.state = {
            id : '',
            item_name :'',
            qty :'',
            users :'',
            image : '' 
        }
    }
    add_stok(e) {
         e.preventDefault();
        let _data = {
            item_name : this.state.item_name,
            qty : this.state.qty,
            image : this.state.image
        }
        if(this.props.status == 'add'){
            this.props.action.add_stok(_data).action
            .then(()=>{
                //this.props.update_parent()
                browserHistory.push('/@logout')
                browserHistory.push('/@stok')
            })
        }
        else{
             _data.id = this.props.selected_id;
            console.log(this.props.action.edit_stok(_data))
        }
    }
    ondrop(files){
    let file  = new FormData()
    file.append('image',files)
    this.props.action.upload(file).action
    .then((result)=>{
        console.log(result.data)
    })
    }
    
    render(){
        return(
            <div>
                <Form onSubmit={this.add_stok.bind(this)} className="stok-form" >
                    <FormItem>
                        <Input addonBefore={<Icon type="bars" />} type="text" placeholder="Product name" 
                            required  valueLink={linkState(this,'item_name')}/>
                    </FormItem>
                    <FormItem>
                        <Input addonBefore={<Icon type="bars" />} type="number" placeholder="Qty" 
                            required valueLink={linkState(this,'qty')}/>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Save
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}


