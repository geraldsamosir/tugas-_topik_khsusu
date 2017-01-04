//react
import React,{Component} from 'react'
import {ReactDOM, render} from 'react-dom'


//redux
import { Provider } from 'react-redux';


//router library
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//import layout
import Main from './layout/main'
import  Home  from './layout/home'
import  Stok  from './layout/stok'
import  History  from './layout/history'
import Outpage from './layout/outpage'

import  aplication  from './layout/app'

//store
import store ,  {history} from './store'


class App extends Component {
    requireAuth() {
        if (localStorage.getItem('login') != 'true') {
            browserHistory.push('/')           
         
        }
    }

    render () {
        return(
            <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={aplication}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path="/@home" component={Home}></Route>
                    <Route path="/@stok" component={Stok} onEnter={this.requireAuth}></Route>
                    <Route path="/@history" component={History} onEnter={this.requireAuth}></Route>
                    <Route path="/@logout" component={Outpage} onEnter={this.requireAuth}></Route>
                </Route>
            </Router>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('app'))