import {
  ASSET_LIST_PAGE_LOADED,
  ASSET_DETAIL_PAGE_LOADED,
  ASSET_DETAIL_PAGE_UNLOADED,
  ASSET_CREATE,
  ASSET_UPDATE
} from "../constants/asset.action.types";
import assetService from "../../services/asset.service";

export const getAssetList = () => {
  const payload = assetService.getAssets();
  return { type: ASSET_LIST_PAGE_LOADED, payload };
};

export const getAsset = key => {
  const payload = assetService.getAsset(key);
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
export const onUnloadAssetDetail = () => {
  return { type: ASSET_DETAIL_PAGE_UNLOADED };
};
