import React, {Component} from "react";
import {connect} from "react-redux";
import ListComponent from "../../components/list";
import {approveSolicitud, deleteSolicitud} from "../../actions/solicitudes";


class List extends Component {

  componentWillMount(){
    //validar primer accesso para enviar a la landing
    if (this.props.primeraVez) {
      // this.props.history.push('/landing')
    }
  }

  render() {
    return (
      <div>
        <ListComponent {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  solicitudes: state.solicitudes.values,
  cantidad: state.solicitudes.values.length,
  primeraVez: state.solicitudes.primeraVez
});

const mapDispatchToProps = {
  approveSolicitud,
  deleteSolicitud
};

export default connect(mapStateToProps, mapDispatchToProps)(List);