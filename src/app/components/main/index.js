import React, {Component} from 'react';
import List from "../../containers/list"
import AddModal from "../../containers/addModal"


class Main extends Component {
  constructor() {
    super();
    this.state = {
      openAddModal: false
    };

    this.openAddModal = this.openAddModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openAddModal() {
    this.setState({
      openAddModal: true
    })
  }

  closeModal() {
    this.setState({
      openAddModal: false
    })
  }


  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Brand" src="./images/visa-logo.png" />
              </a>
              <span className="solicitudes">Solicitudes</span>
            </div>
            <div className="navbar-right">
              <button onClick={this.openAddModal} type="button" className="btn navbar-btn crear-solicitud">
                <img src="./images/add.png" />
                Crear Solicitud
              </button>
            </div>
          </div>
        </nav>
        <div className="body">
          <List history={this.props.history}/>
        </div>
        <AddModal isOpen={this.state.openAddModal} close={this.closeModal}/>
      </React.Fragment>


    )
  }
}

export default Main;