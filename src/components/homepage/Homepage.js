import React, { Component } from "react";
import "../homepage/Homepage.css";

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
          <div className="">
            <button>des cosmétiques</button>
            <button>des produits d'entretien</button>
          </div>
          <p>Avec DIFY, c'est facile, efficace et surtout naturel !</p>
        </div>
      </div>
    );
  }
}

export default Homepage;
