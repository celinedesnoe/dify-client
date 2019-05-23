import React, { Component } from "react";

import "./SideDrawer.css";

class SideDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    return (
      <nav className={drawerClasses}>
        <ul>
          <li>
            <a href="/recettes" className="col-2">
              Recettes
            </a>
          </li>
          <li>
            <a href="/ingrédients" className="col-2">
              Ingrédients
            </a>
          </li>
          <li>
            <a href="/boutiques" className="col-2">
              Boutiques
            </a>
          </li>
          <li>
            <a href="/compte" className="col-2">
              Compte
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideDrawer;
