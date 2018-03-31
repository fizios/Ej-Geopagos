import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'
import solicitudes from './solicitudes';

const reducers = combineReducers({
  solicitudes,
  router: routerReducer
});

export default reducers;
