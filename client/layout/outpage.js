import React ,{Component} from 'react';
import {ReactDOM, render} from 'react-dom'
import {browserHistory } from 'react-router';


export default class Outpage  extends Component{
    logout(){
        localStorage.clear()
        browserHistory.push('/')
    }
    cancel(){
        browserHistory.goBack();
    }
    render(){
        return(
            <div>
                <center>
                    <br/><br/><br/>
                    <h1>yakin akan keluar???</h1>
                     <br/>
                     <h3>
                        <a onClick={this.logout.bind(this)} className="">ya</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a  onClick={this.cancel.bind(this)} className="">tidak</a>
                    </h3>
                </center>
            </div>
        )
    }
}