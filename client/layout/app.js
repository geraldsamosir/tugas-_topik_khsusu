import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionUser from   '../action/Usersaction'
import * as actionStok from '../action/Stokaction'
import * as actionHistoriy from '../action/Historyaction'
import * as actionstok from '../action/Stokaction'
import * as actionhistories from '../action/Historyaction'

import Main from './main';

const  mapStateToProps = (state) =>{
  return {
    users : state.users,
    stok  : state.stok,
    histories :  state.histories
  }
}

function mapDispachToProps(dispatch) {

  return bindActionCreators(
    Object.assign({}
      , actionUser
      , actionStok
      ,actionHistoriy
      )
    , dispatch);
}



const aplication = connect(mapStateToProps, mapDispachToProps)(Main);

export default aplication;
