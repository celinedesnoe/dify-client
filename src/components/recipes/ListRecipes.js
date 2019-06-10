import React, { Component } from "react";
class ListRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    };
  }
  render() {
    return (
      <div>
        {" "}
        <div>
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    );
  }
}

export default ListRecipes;
