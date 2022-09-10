import React, { Component } from "react";
import "./Budget.css";

export class Budget extends Component {
  render() {
    return <div className="budget">Budegt: ${this.props.budget}</div>;
  }
}

export default Budget;
