import { combineReducers } from "redux";

import userProfileReducers from "./state/UserProfile/reducers";

export default combineReducers({
  profile: userProfileReducers
});
