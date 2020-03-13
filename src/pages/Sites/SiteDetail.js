import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSiteDetail,
  unloadSiteDetail
} from "../../redux/actions/asset.actions";
import EventList from "../../components/EventList";

export default function() {
  let { key } = useParams();
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiteDetail(key));
    return () => dispatch(unloadSiteDetail());
  }, [key]);

  if (!asset.site) {
    return <div>loading...</div>;
  }

  return (
    <div id="main">
      <div id="content">
        <div id="content-clear">
          <div className="focus-wrap">
            <div className="box-header">
              <h2> Site Detail</h2>
            </div>

            <div className={`form-item`}>
              <label htmlFor="name">Name</label>
              <label htmlFor="name">{asset.site.name}</label>
            </div>
          </div>

          <div className="focus-wrap">
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
    </div>
  );
}
