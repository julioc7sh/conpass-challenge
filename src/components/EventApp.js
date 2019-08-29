import React, { Component } from "react";
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";
import { connect } from "react-redux";
import addHotspot from "../actionCreators/addHotspot";
import setCreation from "../actionCreators/setCreation";
import Hotspot from "../components/Hotspot";

class EventApp extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleMouseOver(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.creation) {
      if (event.target) {
        event.target.className += " target";
      } else if (event.relatedTarget) {
        event.relatedTarget.className += " target";
      }
    }
  }
  handleMouseOut(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.creation) {
      if (event.target) {
        event.target.className = event.target.className.replace("target", "");
      } else if (event.relatedTarget) {
        event.relatedTarget.className = event.relatedTarget.className.replace(
          "target",
          ""
        );
      }
    }
  }
  handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.props.creation) {
      const hotspot = {
        title: "",
        description: "",
        editable: true,
        posX: event.clientX,
        posY: event.clientY
      };
      this.props.handleAddHotspot(hotspot);
      this.props.handleSetCreation(false);
      if (event.target) {
        event.target.className = event.target.className.replace("target", "");
      } else if (event.relatedTarget) {
        event.relatedTarget.className = event.relatedTarget.className.replace(
          "target",
          ""
        );
      }
    }
  }
  render() {
    const { hotspots } = this.props;

    return (
      <div
        className="event-app"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onClick={this.handleClick}
      >
        {hotspots.map((hotspot, index) => (
          <Hotspot
            key={hotspot.id}
            index={index}
            title={hotspot.title}
            description={hotspot.description}
            editable={hotspot.editable}
            posX={hotspot.posX}
            posY={hotspot.posY}
          />
        ))}
        <AppHeader />
        <AppContent />
      </div>
    );
  }
}

const mapStateToProps = ({ hotspots, creation }) => ({
  hotspots,
  creation
});

const mapDispatchToProps = dispatch => ({
  handleSetCreation(val) {
    dispatch(setCreation(val));
  },
  handleAddHotspot(hotspot) {
    dispatch(addHotspot(hotspot));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventApp);
