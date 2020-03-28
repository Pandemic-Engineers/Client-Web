import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSiteDetail,
  unloadSiteDetail
} from "../../redux/actions/asset.actions";
import EventList from "../../components/EventList";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

export default function() {
  let { key } = useParams();
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiteDetail(key));
    return () => dispatch(unloadSiteDetail());
  }, [key]);

  if (!asset.site) {
    return <div id="loading">loading...</div>;
  }

  return (
    <div id="main">
      <Nav />
      <div id="content">
        <Header />
        <div className="content-wrap">
          <div className="box-header">
            <h2>{asset.site.name}</h2>
          </div>
          <ul class="dashboard-list">
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
        </div>
        <div className="content-wrap">
          <div className="box-header">
            <Link
              className="header-button"
              to={`/events/add?from=site&key=${asset.site.key}`}
            >
              Add Events
            </Link>
            <h2>Recent Events</h2>
          </div>
          <EventList data={asset.events.events} />
        </div>
      </div>
    </div>
  );
}
