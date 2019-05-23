import React, { Component } from "react";
import "./NavBar.css";
import DrawerToggleButton from "./DrawerToggleButton";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="toolbar">
        <nav className="toolbar-navigation">
          <div className="toolbar-toggle-button">
            <DrawerToggleButton
              drawerToggleClickHandler={this.props.drawerToggleClickHandler}
            />
          </div>
          <div>
            <a href="/" className="toolbar-logo">
              DIFY
            </a>
          </div>
          <div className="spacer" />
          <div className="toolbar-navigation-items">
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
          </div>
        </nav>
      </header>
    );
  }
}

export default NavBar;
