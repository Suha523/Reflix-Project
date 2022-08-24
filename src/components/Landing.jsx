import React, { Component } from "react";
import "./Landing.css";

export class Landing extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Suha", backgroundColor: "green" },
        { name: "Aya", backgroundColor: "blue" },
        { name: "Afnan", backgroundColor: "orange" },
        { name: "Evana", backgroundColor: "yellow" },
      ],
    };
  }
  render() {
    return (
      <div className="landing">
        <h1>who's watching?</h1>
        <div className="users-container">
          {this.state.users.map((u, key) => (
            <div key={key} id={u.backgroundColor} className="user">
              {u.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
