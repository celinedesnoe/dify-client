import React, { Component } from "react";
import "./DrawerToggleButton.css";

class DrawerToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        className="toggle-button"
        onClick={this.props.drawerToggleClickHandler}
      >
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
    );
  }
}

export default DrawerToggleButton;
