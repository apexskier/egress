import * as React from "react";
import { IndexRoute, Route } from "react-router";

import EditUserProfile from "./components/EditUserProfile";
import Hello from "./components/Hello";
import NotFound from "./components/NotFound";
import Page from "./components/Page";

export default (
    <Route path="/" component={Page}>
        <IndexRoute component={Hello} />
        <Route path="edit-profile" component={EditUserProfile} />
        <Route path="*" component={NotFound} />
    </Route>
);
