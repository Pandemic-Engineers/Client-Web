import request from "../utils/request";

export default {
  createSite: name => request.post(`/sites`, { name }),
  getSites: () => request.get(`site`),
  createAsset: name => request.post(`/assets`, { name }),
  getAsset: key => request.get(`/assets/${key}`),
  getAssets: () => request.get(`/assets`),
  updateAsset: (key, name) => request.put(`/assets/${key}`, { name }),
  getVisitsBySite: () => request.get(`/assets/all/visits`),
  getVisitsByAsset: key => request.get(`/assets/${key}/visits`),
  logVisit: (key, name, site_key) =>
    request.post(`/assets/${key}/visit`, { name, site_key })
};
