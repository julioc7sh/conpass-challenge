import React, { Component } from "react";
import { connect } from "react-redux";
import removeHotspot from "../actionCreators/removeHotspot";
import setCreation from "../actionCreators/setCreation";
import "../styles/AppContent.scss";

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.handleCreateHotSpots = this.handleCreateHotSpots.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreateHotSpots(event) {
    event.preventDefault();
    this.props.handleSetCreation(true);
  }
  handleDelete(event, index) {
    event.preventDefault();
    this.props.handleRemoveHotspot(index);
  }
  render() {
    return (
      <div className="app-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <button
                type="button"
                className="btn-create-hotspot"
                onClick={this.handleCreateHotSpots}
              >
                Create Hotspot
              </button>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="table-responsive-lg">
                <div className="hotspot-title">List of hotspots</div>
                <div className="hotspot-list">
                  <div className="container">
                    {this.props.hotspots.map((hotspot, index) => (
                      <div className="row" key={`${hotspot.id}`}>
                        <div className="col-6 name">{`${
                          hotspot.text
                        } #${++index}`}</div>
                        <div className="col-6 btn-delete">
                          <a
                            href={`/#delete-${index}`}
                            onClick={event => this.handleDelete(event, --index)}
                          >
                            Delete
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ hotspots }) => ({
  hotspots
});

const mapDispatchToProps = dispatch => ({
  handleSetCreation(val) {
    dispatch(setCreation(val));
  },
  handleRemoveHotspot(index) {
    dispatch(removeHotspot(index));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContent);
