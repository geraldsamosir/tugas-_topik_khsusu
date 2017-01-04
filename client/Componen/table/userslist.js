import React, {Component}from 'react';

import { Table ,Button } from 'antd';
import linkState from 'react-link-state';


export default class Userlist extends Component {

    constructor(){
        super()
        let users = []
    }

    delete(id){
        this.props.action.delete_users(id).action
        .then(()=>{
            for(let i=0;i<this.users.length;i++){
                        if(this.users[i].id == id){
                           this.users.pop(i-1)
                        }
                    }
           this.forceUpdate()
        })
    }

    render(){
       this.users = this.props.list
        const columns = [{
            title: 'Username',
            dataIndex: 'username',
        },
        {
            title : 'Rules',
            dataIndex :'rulesname'
        },
        {
            title: 'Action',
            dataIndex: 'action',
        }]

      this.users.map((user)=>{
          user.action = <Button type="dashed" onClick={this.delete.bind(this,user.id)}>Delete</Button>
          user.rulesname = (user.rules ==2 ?'Super Admin' : 'Admin')
      })

      const pagination = {
            total: this.users.length,
            pageSize :5,
            next: "next",
            back: "back",
            onShowSizeChange: (current, pageSize) => {
              //  console.log('Current: ', current, '; PageSize: ', pageSize);
            },
            onChange: (current) => {
                //console.log('Current: ', current);
            },
        };


      const data = this.users;
        return(
            <div>
                <br/><br/>
                <Table columns={columns} dataSource={data} size="middle" pagination={pagination} />
            </div>
        )
    }
}