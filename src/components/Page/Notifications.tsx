import * as React from "react";
import * as TransitionGroup from "react-addons-transition-group";
import { IDisposable, Observable } from "rx";

import { randomIntervalSource as notificationSource } from "../../sources/randomInterval";
import Notification from "../Notification";

interface INotificationsState {
  notifications?: Array<JSX.Element>;
  subscription?: IDisposable;
}

export default class Notifications extends React.Component<{}, INotificationsState> {
  public constructor(props: any) {
    super(props);
    this.state = {
      notifications: [],
    };
  }
  public componentWillMount = () => {
    notificationSource.connect();
    // start listening for events at mount
    this.toggleListening();
  }
  public toggleListening = () => {
    if (!this.state.subscription) {
      this.setState({
        subscription: notificationSource.subscribe(notification => {
          const key = `${Math.random()}`;
          this.setState({
            notifications: [
              ...this.state.notifications,
              <Notification key={key}
                            title={`${notification.value}`}
                            message={`This took ${notification.interval}ms`} />,
            ],
          } as INotificationsState);
          const timeout = Observable.timer(1000);
          timeout.subscribe(() => {
            this.setState({
              notifications: this.state.notifications.filter((n) => n.key !== key),
            });
          });
        }),
      } as INotificationsState);
    } else {
      this.state.subscription.dispose();
      this.setState({
        subscription: null,
      });
    }
  }
  public render() {
    return (
      <TransitionGroup component="div">
        <button onClick={this.toggleListening}>
          {this.state.subscription ? "Stop" : "Start"} Listening to Notifications
        </button>
        {this.state.notifications}
      </TransitionGroup>
    );
  }
}
