import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addSolicitud} from '../../actions/solicitudes';
import LandingComponent from '../../components/landing';

const Landing = (props) => <LandingComponent {...props}/>


export default connect(null, {
  addSolicitud
})(withRouter(Landing))