import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import BaseState from "../state";
import { SetEmailAddress, SetName  } from "../state/UserProfile/actions";
import UserProfile from "../state/UserProfile/types";

interface IEditUserProfileProps {
  profile: UserProfile;
  onNameChange: any;
  onEmailChange: any;
}

const mapStateToProps = (state: BaseState) => {
  return {
    profile: state.profile as UserProfile,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onEmailChange: bindActionCreators(SetEmailAddress, dispatch),
    onNameChange: bindActionCreators(SetName, dispatch),
  };
};

class EditUserProfile extends React.Component<IEditUserProfileProps, any> {
  constructor(props: IEditUserProfileProps) {
    super(props);
    this.state = props.profile;
  }
  public nameChange = (e: Event) => {
    this.setState({
      name: (e.target as any).value,
    });
    this.props.onNameChange((e.target as any).value);
  }
  public emailChange = (e: Event) => {
    this.setState({
      emailAddress: (e.target as any).value,
    });
    this.props.onEmailChange((e.target as any).value);
  }
  public render() {
    return (
      <div>
        <fieldset>
          <input type="text"
                 onChange={this.nameChange}
                 name="name"
                 value={this.state.name || ""}
                 placeholder="Full Name" />
        </fieldset>
        <fieldset>
          <input type="email"
                 onChange={this.emailChange}
                 name="email"
                 value={this.state.emailAddress || ""}
                 placeholder="test@example.com" />
        </fieldset>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserProfile);
