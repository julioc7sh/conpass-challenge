import React, { Component } from "react";
import AppHeader from "../components/AppHeader";
import AppContent from "../components/AppContent";

class EventApp extends Component {
  constructor(props) {
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  handleMouseOver(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target) {
      event.target.className += " target";
    } else if (event.relatedTarget) {
      event.relatedTarget.className += " target";
    }
  }
  handleMouseOut(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target) {
      event.target.className = event.target.className.replace("target", "");
    } else if (event.relatedTarget) {
      event.relatedTarget.className = event.relatedTarget.className.replace(
        "target",
        ""
      );
    }
  }
  render() {
    return (
      <div
        className="event-app"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <AppHeader />
        <AppContent />
      </div>
    );
  }
}

export default EventApp;
