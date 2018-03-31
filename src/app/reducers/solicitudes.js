import * as types from '../constants/actionTypes';
import moment from 'moment';

const initialState = {
  values: [],
  primeraVez: true
};

export default function solicitudesReducer(state = initialState, action) {

  const newState = Object.assign({}, state);

  if (types.SOLICIDTUD_ADD === action.type) {
    const {solicitud} = action;
    solicitud.date = moment().format("DD/MM/YYYY");
    newState.values.push(solicitud);
    newState.primeraVez = false;
    return newState;
  }

  if (types.SOLICIDTUD_DELETE === action.type) {
    newState.values.splice(action.index, 1);
    return newState;
  }

  if (types.SOLICIDTUD_APPROVE === action.type) {
    newState.values.splice(action.index, 1);
    return newState
  }

  return state;
}