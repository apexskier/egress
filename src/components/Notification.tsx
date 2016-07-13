import * as React from "react";

interface INotificationProps {
  title: string;
  message?: string;
}

interface INotificationState {
  leaving: boolean;
}

export default class Notification extends React.Component<INotificationProps, INotificationState> {
  public constructor(props: INotificationProps) {
    super(props);
    this.state = {
      leaving: false,
    };
  }
  public componentWillLeave = (callback: any) => {
    this.setState({
      leaving: true,
    });
    this.animationEndHandler = callback;
  }
  public animationEndHandler = () => {
    console.warn("animation ended before component leaving");
  }
  public render() {
    let classes = "alert alert-default";
    if (this.state.leaving) {
      classes += " notification-out";
    }
    return (
      <p className={classes} onAnimationEnd={this.animationEndHandler}>
        <b>{this.props.title}</b>{this.props.message ? ` ${this.props.message}` : ""}
      </p>
    );
  }
}
