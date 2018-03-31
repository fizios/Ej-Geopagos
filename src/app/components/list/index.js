import React, {Component} from "react";
import SolicitudItem from "./item";

class List extends Component {
  render() {

    console.log(this.props)

    const {solicitudes, approveSolicitud, deleteSolicitud} = this.props;

    return solicitudes.map((s,index) => <SolicitudItem key={index} {...s} index={index} approveSolicitud={approveSolicitud} deleteSolicitud={deleteSolicitud}/>)
  }
}

export default List;