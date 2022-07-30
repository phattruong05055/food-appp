import React, { Component } from "react";
import Header from "../Component/Header/Header";
import Menu from "../Component/Menu/Menu";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Menu HandleChangeCart={this.props.HandleChangeCart}></Menu>
      </div>
    );
  }
}

export default Homepage;
