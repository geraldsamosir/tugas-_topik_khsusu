import React, {Component}from 'react';

import { Table ,Button} from 'antd';



export default class Historyouttable extends Component {

    constructor(){
        super()
        let histories = []
    }
    delete(id){
        this.props.action.delete_history(id).action
        .then(()=>{
            for(let i=0;i<this.histories.length;i++){
                        if(this.histories[i].id == id){
                           this.histories.pop(i-1)
                        }
                    }
           this.forceUpdate()
        })
    }

    render(){
        this.histories =  this.props.list;
        const columns = [{
            title: 'Item Name',
            dataIndex: 'item_name',
            },{
            title: 'Date',
            dataIndex: 'date',
            },{
                title:'Created by',
                dataIndex :'username'

            }
            ,{
            title: 'Qty',
            dataIndex: 'qty',
            },
            {
                title :'Action',
                dataIndex: 'action'
          }];

          this.histories.map((history)=>{
              history.action =  <div>
                    <Button type="dashed" onClick={this.delete.bind(this,history.id)} >Delete</Button>
                </div>
          })

          const pagination = {
            total: this.histories.length,
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


        const data = this.histories;
        return(
            <div>
                <br/><br/>
                <Table columns={columns} dataSource={data} size="middle" pagination={pagination} />
            </div>
        )
    }
}