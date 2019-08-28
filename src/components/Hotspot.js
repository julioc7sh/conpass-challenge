import React, { Component } from "react";
import "../styles/Hotspot.scss";
import styled from "styled-components";

class Hotspot extends Component {
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
    return (
      <div className="hotspot-cmp">
        <Container className="hotspot">
          <div className="round-inner"></div>
        </Container>
        <Content className="content">
          <h3>How to install</h3>
          <div className="description">
            It takes only 5 minutes to install this script.
          </div>
        </Content>
      </div>
    );
  }
}

export default Hotspot;
