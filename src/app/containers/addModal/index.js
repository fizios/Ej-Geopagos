import React , {Component} from "react";
import {connect} from 'react-redux';
import {addSolicitud} from "../../actions/solicitudes"
import AddModalComponent from "../../components/addModal";


const AddModal = (props) => <AddModalComponent {...props} />

export default connect(null, {
  addSolicitud
})(AddModal);