import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navigation/NavBar";
import SideDrawer from "./components/navigation/SideDrawer";
import Backdrop from "./components/navigation/Backdrop";
import Homepage from "./components/homepage/Homepage";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop backdropClickHandler={this.backdropClickHandler} />;
    }

    return (
      <div className="App" style={{ height: "100%" }}>
        <NavBar drawerToggleClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <Homepage />
      </div>
    );
  }
}

export default App;
