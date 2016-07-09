import * as React from "react";
import { Link } from "react-router";

import Header from "./Header";

export default class Page extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Header />
        <section>{this.props.children}</section>
      </div>
    );
  }
}
