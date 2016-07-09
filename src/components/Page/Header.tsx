import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import BaseState from "../../state";
import UserProfile from "../../state/UserProfile/types";
import Navigation from "./Navigation";

const mapStateToProps = (state: BaseState) => {
  return {
    profile: state.profile as UserProfile,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

class Header extends React.Component<any, any> {
  public render() {
    return (
      <header>
        <h1><Link to="/">Title</Link></h1>
        <p>Hello {this.props.profile.name || this.props.profile.emailAddress}</p>
        <Navigation />
      </header>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
