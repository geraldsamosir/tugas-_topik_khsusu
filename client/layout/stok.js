import React, {Component}from 'react';
import { Tabs ,Icon} from 'antd';
const TabPane = Tabs.TabPane;


import Modalstok from '../Componen/modal/modalstok'
import Stoktable from '../Componen/table/stok'
import Stokgraph from '../Componen/graph/stokgraph'

export default class Stok extends Component{
    constructor(){
        super()
        this.state = {
            stoklsit : []
        }
    }

    componentDidMount(){
        this.getallstok();
    }

    getallstok(){
        this.props.getall_stok().action
        .then((result)=>{
            
            this.setState({
                stoklsit : result.data  
            })
        })
    }

    update (){
        console.log("update")
        this.getallstok.bind(thiss)
    }

    render(){
        
        return(
            <div>
                <Tabs defaultActiveKey="1" onChange={this.getallstok.bind(this)}>
                    <TabPane tab={<span><Icon type="bars" />Table Stok</span>} key="1">
                        <Modalstok action={this.props} update_parent={this.update} />
                         <Stoktable action={this.props} list={this.state.stoklsit}/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="area-chart" />Graph Stok</span>} key="2">
                        <Stokgraph  action={this.props} list={this.state.stoklsit}/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}


