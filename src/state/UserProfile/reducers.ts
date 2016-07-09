import { handleActions } from "redux-actions";

import UserProfile from "./types";

const initialUserProfile: UserProfile = {
  emailAddress: "test@example.com",
};

const userProfileReducers = handleActions({
  "SET_NAME": (state, action) => (Object.assign({}, state, {
    name: action.payload,
  })),
  "SET_EMAIL_ADDRESS": (state, action) => (Object.assign({}, state, {
    emailAddress: action.payload,
  })),
  "SET_PHONE": (state, action) => (Object.assign({}, state, {
    phone: action.payload,
  })),
}, initialUserProfile);

export default userProfileReducers;
