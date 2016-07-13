import * as React from "react";
import { Link } from "react-router";

export default class Navigation extends React.Component<any, any> {
  public render() {
    return (
      <nav>
        <p><Link to="/edit-profile">Working link</Link></p>
        <p><Link to="/404">Broken link</Link></p>
      </nav>
    );
  }
}
