import React, { Component } from "react";
import "./Backdrop.css";

class BackDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="backdrop" onClick={this.props.backdropClickHandler} />
    );
  }
}

export default BackDrop;
