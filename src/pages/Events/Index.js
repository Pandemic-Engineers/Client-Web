import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssetList,
  unloadAssetList
} from "../../redux/actions/asset.actions";
import EventList from "../../components/EventList";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

function Events() {
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssetList());
    return () => dispatch(unloadAssetList());
  }, []);

  if (!asset.events) {
    return (
      <div id="main">
        <Nav selected={"events"} />
        <div id="content">
          <Header />
          <div id="loading">loading...</div>
        </div>
      </div>
    );
  }
  return (
    <div id="main">
      <Nav selected={"events"} />
      <div id="content">
        <Header />
        <div className="content-wrap">
          <div className="box-header">
            <Link className="header-button" to="/events/add">
              Create Event
            </Link>
            <h2>Events</h2>
          </div>
          <EventList data={asset.events} />
        </div>
      </div>
    </div>
  );
}

export default Events;
