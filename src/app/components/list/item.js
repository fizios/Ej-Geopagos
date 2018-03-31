import React, {Component} from 'react';

class Item extends Component {
  constructor() {
    super();

    this.state = {
      showConfirm: false,
      animation: ""
    };

    this.showConfirm = this.showConfirm.bind(this);
    this.hideConfirm = this.hideConfirm.bind(this);
    this.changeInput = this.changeInput.bind(this);
    this.onApproveClick = this.onApproveClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.triggerAnimation = this.triggerAnimation.bind(this);
  }

  showConfirm(e) {
    e.preventDefault();
    this.setState({
      showConfirm: true
    })
  }

  hideConfirm() {
    this.setState({
      showConfirm: false
    })
  }

  changeInput(e) {
    this.setState({
      terminal: e.currentTarget.value
    })
  }

  onApproveClick(e) {
    e.preventDefault();
    this.setState({
      animation: "fadeOutRight animated"
    });
    setTimeout(()=> {
      if(this.state.terminal) {
        this.props.approveSolicitud(this.props.index)
      }
    }, 500);
  }

  onDeleteClick(e) {
    e.preventDefault();
    this.setState({
      animation: "fadeOutLeft animated"
    });
    setTimeout(() => this.props.deleteSolicitud(this.props.index), 500);

  }

  triggerAnimation() {
    const { animation } = this.state;
    this.setState({ animation: '' }, () => {
      this.setState({ animation });
    });
  }

  render() {
    const {name, cuit, id, date} = this.props;

    const {showConfirm, terminal, animation} = this.state;

    return (
      <div className={`itemContainer ${animation}`}>
        <div className={`delete ${showConfirm ? "confirm" : ""}`}>
          <a href="#" onClick={this.showConfirm}>
            <img src={`./images/reject_${showConfirm ? "active" : "inactive"}.png`} />
          </a>
        </div>

        {
          this.state.showConfirm ?
            (
              <React.Fragment>
                <div className="confirm-container">
                  <span className="text">¿Estás seguro de rechazar la solicitud de este comercio ?</span>
                  <a className="cancelar" href="#" onClick={this.hideConfirm}>Cancelar</a>
                  <a className="rechazar" href="#" onClick={this.onDeleteClick}>Rechazar</a>
                </div>
              </React.Fragment>
            ) :
            (
              <React.Fragment>
                <div className="details">
                  <span className="name">{name}</span>
                  <span className="cuit"><span>cuit:</span> {cuit}</span>
                </div>
                <div className="identificacion">
                  <span className="n-de-establecimient">Nº de establecimiento</span>
                  <span className="id">{id}</span>
                  <span className="date">{date}</span>
                </div>
                <input className={terminal ? "valid": ""} type="text" placeholder="Nº de Terminal" onChange={this.changeInput}/>
                <div className="approve">
                  <a href="#" onClick={this.onApproveClick}>
                    <img  src={`./images/accept_${terminal ? "active" : "inactive"}.png`} />
                  </a>
                </div>
              </React.Fragment>
          )
        }
      </div>
    )
  }
}

export default Item;