import React, { Component } from "react";
import { connect } from "react-redux";
import updateHotspot from "../actionCreators/updateHotspot";
import removeHotspot from "../actionCreators/removeHotspot";
import "../styles/Hotspot.scss";
import styled from "styled-components";

const Container = styled.div`
  top: ${props => props.posY}px;
  left: ${props => props.posX}px;
`;
const Content = styled.div`
  top: ${props => props.posY + 30}px;
  left: ${props => props.posX - 136}px;
`;
const Register = styled.div`
  top: ${props => props.posY + 25}px;
  left: ${props => props.posX - 136}px;
`;

class Hotspot extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  state = {
    title: "",
    description: ""
  };
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleRegister(event) {
    this.props.handleUpdateHotspot({
      index: this.props.index,
      title: this.state.title,
      description: this.state.description,
      editable: false
    });
  }
  handleRemove(event) {
    this.props.handleUpdateHotspot({
      index: this.props.index,
      editable: false
    });
    this.props.handleRemoveHotspot(this.props.index);
  }
  render() {
    const { title, description } = this.state;
    const isInvalid = title.length === 0 || description.length === 0;
    return (
      <div className="hotspot-cmp">
        <Container
          posX={this.props.posX}
          posY={this.props.posY}
          className="hotspot"
        >
          <div className="round-inner"></div>
        </Container>
        {this.props.editable ? (
          <Register
            posX={this.props.posX}
            posY={this.props.posY}
            className="form-register"
          >
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                placeholder="Título informativo"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                cols="10"
                rows="2"
                placeholder="Descrição que explica melhor o hotspot"
                value={this.state.description}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div className="form-group btn-container">
              <button onClick={this.handleRemove} className="btn btn-danger">
                Deletar
              </button>
              <button
                disabled={isInvalid}
                onClick={this.handleRegister}
                className="btn btn-primary"
              >
                Cadastrar
              </button>
            </div>
          </Register>
        ) : (
          <Content
            posX={this.props.posX}
            posY={this.props.posY}
            className="content"
          >
            <h3>{this.props.title}</h3>
            <div className="description">{this.props.description}</div>
          </Content>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ creation }) => ({
  creation
});

const mapDispatchToProps = dispatch => ({
  handleUpdateHotspot(hotspot) {
    dispatch(updateHotspot(hotspot));
  },
  handleRemoveHotspot(index) {
    dispatch(removeHotspot(index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hotspot);
