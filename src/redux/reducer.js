import { combineReducers } from "redux";
import common from "./reducers/common.reducer";
import auth from "./reducers/auth.reducer";
import asset from "./reducers/asset.reducer";

export default combineReducers({
  common,
  auth,
  asset
});
