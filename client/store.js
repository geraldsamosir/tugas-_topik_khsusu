import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';


const users = []
const stok =[]
const histories = []

const defaultstate = {
    users,
    stok,
    histories,
}

const store  = createStore(rootReducer,defaultstate)

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
