import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span>ReactMeals</span>
        <span className="Cart">
          <i className="fa-solid fa-cart-arrow-down"></i>
          <h3>cart</h3>
          <h3>(0)</h3>
        </span>
      </div>
    );
  }
}

export default Header;
