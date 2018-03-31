import React , {Component} from "react";
import Modal from "react-modal";
import { Form, Text} from 'react-form';


class AddModal extends Component {

  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(solicitud) {
    this.props.close();
    this.props.addSolicitud(solicitud);
  }

  render() {
    const props = this.props;


    const customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0'
      }
    };


    return (
      <Modal
        isOpen={props.isOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="add-form">
          <div className="title">
            <h1>
              Crear Solicitud
            </h1>
          </div>
          <Form onSubmit={this.onSubmit}>
            {formApi => (
              <form onSubmit={formApi.submitForm}>
                <div className="col-xs-12">
                  <label htmlFor="name">Razón Social</label>
                  <Text field="name" id="name" placeholder="ej: Nexus S.A."/>
                </div>
                <div className="col-xs-6">
                  <label htmlFor="cuit">Número de CUIT</label>
                  <Text field="cuit" id="cuit" placeholder="00-000000-0"/>
                </div>
                <div className="col-xs-6">
                  <label htmlFor="id">Número de establecimiento</label>
                  <Text field="id" id="id" placeholder="0000000-0"/>
                </div>

                <div className="col-xs-12 botones">
                  <button onClick={props.close} className="mb-4 btn btn-primary cancelar">
                    Cancelar
                  </button>

                  <button type="submit" className="mb-4 btn btn-primary crear">
                    Crear
                  </button>
                </div>


              </form>
            )}
          </Form>
        </div>
      </Modal>
    );
  }
}

export default AddModal;