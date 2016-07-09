import * as React from "react";
import { Link } from "react-router";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export default class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}
