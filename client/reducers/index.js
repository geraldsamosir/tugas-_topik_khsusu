import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import {users} from './users';
import {stok} from './stok';
import {histories} from './histories';

const rootReducer = combineReducers(
    {   
        users,
        stok,
        histories,
        routing: routerReducer 
    }
);

export default rootReducer;