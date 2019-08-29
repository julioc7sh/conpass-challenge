import React, { Component } from "react";
import { connect } from "react-redux";
import updateHotspot from "../actionCreators/updateHotspot";
import "../styles/Hotspot.scss";
import styled from "styled-components";

class Hotspot extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }
  state = {
    title: "",
    description: ""
  };
  handleChange(event, label) {
    this.setState({ [label]: event.target.value });
  }
  handleRegister(event) {
    event.preventDefault();

    this.props.handleUpdateHotspot({
      title: this.state.title,
      description: this.state.description,
      editable: false
    });
  }
  render() {
    const { posX, posY } = this.props;

    const Container = styled.div`
      top: ${posY}px;
      left: ${posX}px;
    `;
    const Content = styled.div`
      top: ${posY + 30}px;
      left: ${posX - 186}px;
    `;
    const Register = styled.div`
      top: ${posY + 25}px;
      left: ${posX - 186}px;
    `;
    return (
      <div className="hotspot-cmp">
        <Container className="hotspot">
          <div className="round-inner"></div>
        </Container>
        {this.props.editable ? (
          <Register className="form-register">
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Título informativo"
                value={this.state.title}
                onChange={event => this.handleChange(event, "title")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              {/* <input
                type="text"
                className="form-control"
                id="description"
                placeholder="descrição que explica melhor o hotspot"
              /> */}
              <textarea
                className="form-control"
                id="description"
                name="description"
                cols="10"
                rows="2"
                placeholder="Descrição que explica melhor o hotspot"
                value={this.state.description}
                onChange={event => this.handleChange(event, "description")}
              ></textarea>
            </div>
            <div className="form-group btn-container">
              <button
                onClick={this.handleRegister}
                disabled
                type="submit"
                className="btn btn-primary"
              >
                Cadastrar
              </button>
            </div>
          </Register>
        ) : (
          <Content className="content">
            <h3>How to install</h3>
            <div className="description">
              It takes only 5 minutes to install this script.
            </div>
          </Content>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleUpdateHotspot(hotspot) {
    dispatch(updateHotspot(hotspot));
  }
});

export default connect(mapDispatchToProps)(Hotspot);
