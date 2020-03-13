import request from "../utils/request";

export default {
  createSite: name => request.post(`/sites`, { name }),
  getSites: () => request.get(`/sites`),
  getSite: key => request.get(`/sites/${key}`),
  getSiteEvents: key => request.get(`sites/${key}/events`),

  createAsset: name => request.post(`/assets`, { name }),
  getAsset: key => request.get(`/assets/${key}`),
  getAssets: () => request.get(`/assets`),
  updateAsset: (key, name) => request.put(`/assets/${key}`, { name }),
  getAssetEvents: key => request.get(`/assets/${key}/events`),

  logEvent: (key, site) => request.post(`/assets/${key}/events`, { site })
};
