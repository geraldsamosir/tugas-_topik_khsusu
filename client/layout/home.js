import React, {Component}from 'react';
import { Tabs ,Icon,Card} from 'antd';
const TabPane = Tabs.TabPane;

//Componen
import Login from '../Componen/form/login'
import Register from '../Componen/form/register'
import Userlist from  '../Componen/table/userslist'



export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            authfrom : '',
            dasboard : 'none',
            superuser: 'none',
            users : []
        }
    }
    componentDidMount(){
        if(localStorage.getItem('login')== 'true'){
            if(localStorage.getItem('rules') =='2'){
                this.setState({
                    authfrom : 'none',
                    dasboard :'none',
                    superuser :''
                })
                this.getalluser()     
            }
            else{
                this.setState({
                    authfrom : 'none',
                    dasboard :'',
                    superuser :'none'
                })
            }
           
        }
    }

    getalluser(){
        this.props.getallusers().action.then((data)=>{
            this.setState({
                users : data.data
            })
        })
       
    }

    render(){
        const islogin=()=>{
            this.setState({
                authfrom : 'none',
                dasboard :''
            })
        }
        return(
            <div>
            <div style={{display:this.state.dasboard }}>
                <br/><br/><br/>
                <center className="container">
                <Card style={{ width: '80%' }}>
                    <h1>Howdy  {localStorage.getItem('username')} </h1>
                    <h1>Welcome to Stok Jones App</h1>
                </Card>                
                </center>
            </div>
            <div id="form" style={{display:this.state.authfrom }}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="lock" />Login</span>} key="1">
                        <Login  action={this.props} logins={islogin}/>
                    </TabPane>
                </Tabs>
            </div>
            <div id="form" style={{display:this.state.superuser }}>
                <Tabs defaultActiveKey="1" onChange={this.getalluser.bind(this)}>
                    <TabPane tab={<span><Icon type="plus-square-o" />Register</span>} key="1">
                        <Register action={this.props} />
                    </TabPane>
                     <TabPane tab={<span><Icon type="bars" />List User</span>} key="2">
                        <Userlist  action={this.props} list={this.state.users} user_update={this.getalluser}/>
                    </TabPane>
                </Tabs>
            </div>
            </div>
        )
    }
}


