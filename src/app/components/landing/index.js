import React, {Component} from 'react';
import { Form, Text} from 'react-form';

class Landing extends Component {

  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  onSubmit(solicitud) {
    this.props.addSolicitud(solicitud);
    this.props.history.push('/')
  }

  validateInput(value) {
    return !value || value.trim() === '' ? 'Valor requerido' : null
  }


  render() {
    return(
      <div id="landing">

        <div className="header">
          <div className="row1 row">
            <div className="col1 col-xs-6">
              <h2 className="bienvenido">Bienvenido.</h2>
              <div className="input-wrapper">
                <input className="introduce-tu-nombre {" type="text" placeholder="Introduce tu nombre" />
                <button className="white-arrow" >
                  <i className="glyphicon glyphicon-arrow-right" />
                </button>
              </div>
            </div>
            <div className="col2 col-xs-4">
              <img className="visa-logo" src="./images/visa-logo-landing.png"/>
              <span>Solicitudes</span>
            </div>
          </div>
          <div className="row">
            <div>
              <img className="visa-example" src="./images/visa-card.png"/>
            </div>
          </div>
        </div>

        <div className="form">
          <h2>Crea tu primera Solicitud</h2>
          <Form onSubmit={this.onSubmit}>
            {formApi => {

              const isInvalid = formApi.errors || Object.values(formApi.values).length !== 3;

              return (
                <form onSubmit={formApi.submitForm}>
                  <label htmlFor="name">Razón Social</label>
                  <Text field="name" id="name" placeholder="Razón social del comercio" validate={this.validateInput}/>
                  <label htmlFor="cuit">Número de CUIT</label>
                  <Text field="cuit" id="cuit" placeholder="ej: 54654 - 54654" validate={this.validateInput}/>
                  <label htmlFor="id">Número de establecimiento</label>
                  <Text field="id" id="id" placeholder="ej: 545566-0" validate={this.validateInput}/>

                  <button type="submit" className={`mb-4 btn btn-primary ${isInvalid ? "" : "active"}`} disabled={isInvalid}>
                    <span className="text">
                      Crear solicitud
                    </span>
                  </button>

                </form>
              )
            }}
          </Form>
        </div>

        <div className="disclaimer col-xs-6">
          <p className="comienza-a-aprobar-n">
            Comienza a aprobar números
            de establecimiento
          </p>
          <p className="lorem-ipsum-dolor-si">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quis orci eget pharetra. Pellentesque lacinia ultrices arcu, quis pulvinar eros iaculis in. Duis ut aliquam felis.

            Donec ut tellus et leo vestibulum lobortis. Aenean dignissim varius est, nec porttitor augue aliquam vitae. Vivamus placerat nunc eu placerat maximus. Morbi tincidunt nunc eu elit porta, vel consequat leo varius. Vivamus vel ornare odio, eget feugiat purus. Aliquam erat volutpat. Vivamus a est blandit, rutrum mauris convallis, facilisis sem. Pellentesque

            pellentesque nunc at ligula lacinia, eget porttitor mauris aliquet. Fusce non felis convallis, ultricies purus at, faucibus nisi. Sed nibh lorem, sodales ut justo sed, rutrum cursus enim. Quisque nec nibh non mi accumsan finibus. Nam iaculis eget justo pharetra finibus.
          </p>
        </div>

      </div>
    )
  }
}

export default Landing;