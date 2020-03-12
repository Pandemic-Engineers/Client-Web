import {
  ASSET_LIST_PAGE_LOADED,
  ASSET_LIST_PAGE_UNLOADED,
  ASSET_DETAIL_PAGE_LOADED,
  ASSET_DETAIL_PAGE_UNLOADED,
  ASSET_CREATE,
  ASSET_UPDATE
} from "../constants/asset.action.types";

export default (state = {}, action) => {
  switch (action.type) {
    case ASSET_LIST_PAGE_LOADED:
      return {
        ...state,
        errors: action.error ? action.payload.error : null,
        assets: action.error ? null : action.payload
      };
    case ASSET_DETAIL_PAGE_LOADED:
      return {
        ...state,
        asset: action.error ? null : action.payload
      };
    case ASSET_CREATE:
    case ASSET_UPDATE:
      return {
        ...state,
        errors: action.error ? action.payload.error : null
      };
    case ASSET_LIST_PAGE_UNLOADED:
    case ASSET_DETAIL_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
