import {
  ASSET_LIST_PAGE_LOADED,
  ASSET_LIST_PAGE_UNLOADED,
  ASSET_DETAIL_PAGE_LOADED,
  ASSET_DETAIL_PAGE_UNLOADED,
  ASSET_CREATE,
  ASSET_UPDATE,
  SITE_LIST_PAGE_LOADED,
  SITE_LIST_PAGE_UNLOADED,
  SITE_CREATE,
  SITE_DETAIL_PAGE_LOADED,
  SITE_DETAIL_PAGE_UNLOADED,
  LOG_EVENT,
  EVENT_ADD_PAGE_LOADED,
  EVENT_ADD_PAGE_UNLOADED
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
        asset: action.error ? null : action.payload[0],
        events: action.error ? null : action.payload[1]
      };
    case SITE_DETAIL_PAGE_LOADED:
      return {
        ...state,
        site: action.error ? null : action.payload[0],
        events: action.error ? null : action.payload[1]
      };
    case ASSET_CREATE:
    case ASSET_UPDATE:
    case SITE_CREATE:
    case LOG_EVENT:
      return {
        ...state,
        errors: action.error ? action.payload.error : null
      };
    case SITE_LIST_PAGE_LOADED:
      return {
        ...state,
        errors: action.error ? action.payload.error : null,
        sites: action.error ? null : action.payload
      };
    case EVENT_ADD_PAGE_LOADED:
      return {
        ...state,
        sites: action.error ? null : action.payload[0],
        assets: action.error ? null : action.payload[1]
      };
    case ASSET_LIST_PAGE_UNLOADED:
    case ASSET_DETAIL_PAGE_UNLOADED:
    case SITE_LIST_PAGE_UNLOADED:
    case SITE_DETAIL_PAGE_UNLOADED:
    case EVENT_ADD_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
