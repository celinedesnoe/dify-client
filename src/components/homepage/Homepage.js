import React, { Component } from "react";
import "../homepage/Homepage.css";

import Button from "../molecules/Button";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="homepage">
        <div className="homepage-1 d-flex align-items-center justify-content-center flex-column">
          <h1>Trouve des recettes pour :</h1>
          <div className="d-flex align-items-center justify-content-center w-100">
            <Button text="des cosmétiques" className="yellow-button" />
            <Button text="des produits d'entretien" className="yellow-button" />
          </div>
          <div className="tagline-bottom">
            Avec DIFY, c'est facile, efficace et surtout naturel !
          </div>
        </div>
        <div className="homepage-2 d-flex align-items-center flex-row">
          <div className="side-img col-5 h-100"> </div>
          <div className="side-homepage-2 col-7 h-100 w-100 d-flex align-items-center justify-content-center flex-column">
            <div className="text-align-center">
              Avec de simples ingrédients, on peut faire des merveilles !
            </div>
            <Button
              text="Découvrez les ingrédients"
              className="yellow-button"
              // width="60%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
