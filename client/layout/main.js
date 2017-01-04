import React ,{Component} from 'react';
import { Link } from 'react-router';
import {ReactDOM, render} from 'react-dom'

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

export default class Main  extends Component{
    constructor(props){
        super(props)
        this.state ={
            current :'mail',
            theme :'dark'
        }
    }

    render(){
        return(
            <LocaleProvider locale={enUS} >
            <div>
                <Menu onClick={this.handleClick}
                    theme={this.state.theme}
                    selectedKeys={[this.state.current]}
                    mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/@home">
                        <h3><Icon type="home" /> Stok </h3>
                        </Link>                  
                    </Menu.Item>
                    <SubMenu title={<h3><Icon type="appstore" />All Menu</h3>}>
                        <Menu.Item title="Stok Item">
                            <Link to="/@Stok">
                               <h3><Icon type="appstore" /> Stok </h3>
                            </Link>           
                        </Menu.Item>
                        <Menu.Item title="History">
                            <Link to="/@history">
                               <h3><Icon type="area-chart" /> History </h3>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="logout">     
                        <Link to="/@logout">       
                        <h3><Icon  type="logout" /> logout</h3>     
                        </Link>
                    </Menu.Item>
                </Menu>
                <div className="container">
                    {React.cloneElement(this.props.children,this.props)}
                </div>
            </div>
             </LocaleProvider>
        )
    }
}