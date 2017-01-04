import React, {Component}from 'react';
import { Tabs ,Icon} from 'antd';
const TabPane = Tabs.TabPane;


import Modalhistoryin from '../Componen/modal/modalhistoryin'
import Modalhistoryout from '../Componen/modal/modalhistoryout'
import Historyouttable from '../Componen/table/history_out'
import Historyintable from '../Componen/table/history_in'

import Ingraph from '../Componen/graph/ingraph'
import Outgraph from '../Componen/graph/outgraph'

export default class History extends Component{
    constructor(){
        super()
        this.state={
            in : [],
            out : []
        }
    }
    componentDidMount(){
        this.getallhistory()
    }

    getallhistory(){
        this.props.getall_history().action

      .then((result)=>{
          this.setState({
              in : [],
              out :[]
          })
          result.data.map((item)=>{
              //1 = in and 2 = out
              if(item.status_code == 1){
                  this.setState({
                      in : this.state.in.concat(item)
                  })
              }
              else if(item.status_code == 2){
                  this.setState({
                      out : this.state.out.concat(item)
                  })
              }
          })
      })
    }

    render(){
        return(
            <div>
                <Tabs defaultActiveKey="1" onChange={this.getallhistory.bind(this)}>
                    <TabPane tab={<span><Icon type="bars" />Table History in </span>} key="1">
                        <Modalhistoryin  action={this.props} status_code="1"/> 
                        <Historyintable  action={this.props} list={this.state.in}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="bars" />Table History outs </span>} key="2">
                        <Modalhistoryout action={this.props} status_code="2"/> 
                        <Historyouttable action={this.props} list={this.state.out}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="area-chart" />Graph History in</span>} key="3">
                        <Ingraph  action={this.props} list={this.state.in}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="area-chart" />Graph History out</span>} key="4">
                        <Outgraph  action={this.props} list={this.state.out}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}


