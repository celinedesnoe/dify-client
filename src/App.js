import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/navigation/NavBar";
import SideDrawer from "./components/navigation/SideDrawer";
import Backdrop from "./components/navigation/Backdrop";
import Homepage from "./components/homepage/Homepage";
import ListRecipes from "./components/recipes/ListRecipes";

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
        <Switch>
          <Route path="/recettes" component={ListRecipes} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
