import React, { Component } from "react";
import "../molecules/Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <button className={this.props.className}>{this.props.text}</button>;
  }
}

export default Button;
