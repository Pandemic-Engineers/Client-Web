import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSiteDetail,
  unloadSiteDetail
} from "../../redux/actions/asset.actions";
import EventList from "../../components/EventList";
import AssetList from "../../components/AssetList";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Graph from "../../components/widgets/Graph";
import GoogleMapReact from "google-map-react";

export default function() {
  let { key } = useParams();
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiteDetail(key));
    return () => dispatch(unloadSiteDetail());
  }, [key]);

  if (!asset.site) {
    return (
      <div id="main">
        <Nav />
        <div id="content">
          <Header />
          <div id="loading">loading...</div>
        </div>
      </div>
    );
  }

  const lat = parseInt(asset.site.latitude * 1000000) / 1000000;
  const lng = parseInt(asset.site.longitude * 1000000) / 1000000;

  return (
    <div id="main">
      <Nav />
      <div id="content">
        <Header />
        <div className="content-wrap">
          <div className="box-header">
            <h2>{asset.site.name}</h2>
          </div>
          <ul className="dashboard-list">
            <li>
              <strong>Assets</strong>
              <em>21</em>
            </li>
            <li>
              <strong>Events</strong>
              <em>580</em>
            </li>
            <li>
              <strong>Created</strong>
              <em>Time</em>
            </li>
          </ul>
          <div className="map-box">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyChP3vkShVB0f9F_pWR-f9RoevDAuY5lPQ"
              }}
              defaultCenter={{ lat: lat, lng: lng }}
              defaultZoom={11}
            >
              <img className="map-pin" src="/pin.png" lat={lat} lng={lng} />
            </GoogleMapReact>
          </div>
          <div className="graph-box">
            <Graph />
          </div>
        </div>
        <div className="content-wrap-clear">
          <div className="content-wrap content-wrap-narrow">
            <div className="box-header">
              <Link
                className="header-button"
                to={`/events/add?from=site&key=${asset.site.key}`}
              >
                Create Event
              </Link>
              <h2>Recent Events</h2>
            </div>
            <EventList data={asset.events.events} mode="small" />
          </div>
          <div className="content-wrap content-wrap-narrow content-wrap-last">
            <div className="box-header">
              <h2>Recent Assets</h2>
            </div>
            <AssetList data={[]} mode="small" />
          </div>
        </div>
      </div>
    </div>
  );
}
