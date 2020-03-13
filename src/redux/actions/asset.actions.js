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
import assetService from "../../services/asset.service";

export const getAssetList = () => {
  const payload = assetService.getAssets();
  return { type: ASSET_LIST_PAGE_LOADED, payload };
};
export const unloadAssetList = () => {
  return { type: ASSET_LIST_PAGE_UNLOADED };
};
export const getAssetDetail = key => {
  const payload = Promise.all([
    assetService.getAsset(key),
    assetService.getAssetEvents(key)
  ]);
  return { type: ASSET_DETAIL_PAGE_LOADED, payload };
};
export const createAsset = name => {
  const payload = assetService.createAsset(name);
  return { type: ASSET_CREATE, payload };
};
export const updateAsset = (key, name) => {
  const payload = assetService.updateAsset(key, name);
  return { type: ASSET_UPDATE, payload };
};
export const unloadAssetDetail = () => {
  return { type: ASSET_DETAIL_PAGE_UNLOADED };
};

export const getSiteList = () => {
  const payload = assetService.getSites();
  return { type: SITE_LIST_PAGE_LOADED, payload };
};
export const unloadSiteList = () => {
  return { type: SITE_LIST_PAGE_UNLOADED };
};
export const createSite = name => {
  const payload = assetService.createSite(name);
  return { type: SITE_CREATE, payload };
};
export const getSiteDetail = key => {
  const payload = Promise.all([
    assetService.getSite(key),
    assetService.getSiteEvents(key)
  ]);
  return { type: SITE_DETAIL_PAGE_LOADED, payload };
};
export const unloadSiteDetail = () => {
  return { type: SITE_DETAIL_PAGE_UNLOADED };
};

export const logEvent = (asset, site, from, key) => {
  const payload = assetService.logEvent(asset, site);
  return { type: LOG_EVENT, payload, from, key };
};

export const loadEventAddPage = () => {
  const payload = Promise.all([
    assetService.getSites(),
    assetService.getAssets()
  ]);
  return { type: EVENT_ADD_PAGE_LOADED, payload };
};
export const unloadEventAddPage = () => {
  return { type: EVENT_ADD_PAGE_UNLOADED };
};
