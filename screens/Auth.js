import React from "react";
import Login from "../components/Login";

export default class Auth extends React.Component {
  render() {
    return (
      <Login newJWT={this.props.newJWT} />
    );
  }
}