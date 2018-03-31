import * as types from '../constants/actionTypes';

export function addSolicitud(solicitud) {
  return dispatch => {
    dispatch({
      type: types.SOLICIDTUD_ADD,
      solicitud
    })
  }
}

export function deleteSolicitud(index) {
  return dispatch => {
    dispatch({
      type: types.SOLICIDTUD_DELETE,
      index
    })
  }
}

export function approveSolicitud(index) {
  return dispatch => {
    dispatch({
      type: types.SOLICIDTUD_APPROVE,
      index
    })
  }
}