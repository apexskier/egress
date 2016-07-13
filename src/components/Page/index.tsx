import * as React from "react";

import Header from "./Header";
import Notifications from "./Notifications";

interface IPageState {
  debug: boolean;
}

export default class Page extends React.Component<any, IPageState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      debug: false,
    }
  }
  public toggleDebug = () => {
    this.setState({
      debug: !this.state.debug,
    });
  }
  public render() {
    return (
      <div className={this.state.debug ? "debug-ui" : ""}>
        <button onClick={this.toggleDebug}>Toggle</button>
        <Header />
        <Notifications />
        <section>{this.props.children}</section>
      </div>
    );
  }
}
