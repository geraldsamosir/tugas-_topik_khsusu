import React, {Component}from 'react';
import { Form, Icon, Input, Button, Checkbox , Card , Select ,DatePicker} from 'antd';
import linkState from 'react-link-state';
import {browserHistory} from 'react-router';
const FormItem = Form.Item;
const Option =  Select.Option;

export default class History extends Component{
    
    constructor(){
        super()
        this.state = {
            stoks :  '',
            qty: '',
            date:'',
            status_code :'',
            items : []
        }
    }

    componentDidMount(){
        
       this.props.action.getall_stok().action
        .then((result)=>{
            
            this.setState({
                items : result.data  ,
                status_code :  this.props.status_code
                
            })
        })
    }
    handleSubmit(e){
         e.preventDefault();
         let data = {
             stoks :  this.state.stoks,
             qty : this.state.qty,
             status_code : this.state.status_code,
             date : this.state.date._d
         }
         this.props.action.add_history(data).action
         .then(()=>{
               browserHistory.push('/@logout')
                browserHistory.push('/@history')
                
         })
        
    }
    handleChange(key) {
          this.setState({
             stoks : key  
          })
    }
    handledate(value){
        this.setState({
            date :value
        })
    }
    render(){
        let option  = this.state.items.map((item)=> <Option key={item.id}>{item.item_name} </Option>)
        return(
            <div>
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form" >
                    <FormItem>
                        <Select
                            showSearch
                            placeholder="Product"
                            optionFilterProp="children"
                            onChange={this.handleChange.bind(this)}
                        >
                            {option}
                        </Select>
                    </FormItem>
                    <FormItem>
                        <DatePicker  
                            onChange={this.handledate.bind(this)} 
                            placeholder="Select datetime" 
                            showToday={true}
                            />

                    </FormItem>
                    <FormItem>
                        <Input addonBefore={<Icon type="bars" />} type="number" placeholder="Qty" 
                            required  valueLink={linkState(this,'qty')}/>
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


