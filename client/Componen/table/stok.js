import React, {Component}from 'react';

import { Table ,Button} from 'antd';



export default class Stoktable extends Component {

    constructor(){
        super()
        let stoks_list = [];
    }

    delete(id){
        this.props.action.delete_stok(id).action
        .then(()=>{
            for(let i=0;i<this.stoks_list.length;i++){
                        if(this.stoks_list[i].id == id){
                           this.stoks_list.pop(i-1)
                        }
                    }
           this.forceUpdate()
        })
    }
    render(){
        this.stoks_list = this.props.list;
        const columns = [{
            title: 'Name',
            dataIndex: 'item_name',
            },{
             title :'Qty',
             dataIndex: 'qty'
            },{
                title :'Create By',
                dataIndex: 'username'
            },
            {
                title:'Action',
                dataIndex :'action'
            }];

        this.stoks_list.map((item)=>{
            item.action = <div>
                    <Button type="dashed" onClick={this.delete.bind(this,item.id)}>Delete</Button>
                </div>
        })

        const pagination = {
            total: this.stoks_list.length,
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

       const data = this.stoks_list
        return(
            <div>
                <br/><br/>
                <Table columns={columns} dataSource={data} size="middle" pagination={pagination} />
            </div>
        )
    }
}