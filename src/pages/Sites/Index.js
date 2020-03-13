import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSiteList, unloadSiteList } from "../../redux/actions/asset.actions";
import SiteList from "../../components/SiteList";

export default () => {
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSiteList());
    return () => dispatch(unloadSiteList());
  }, []);

  if (!asset.sites) {
    return <div>loading...</div>;
  }

  return (
    <div id="main">
      <div id="content">
        <div id="content-wrap">
          <div className="box-header">
            <Link className="header-button" to="/sites/add">
              Add
            </Link>
            <h2>Site List</h2>
          </div>
          <SiteList data={asset.sites} />
        </div>
      </div>
    </div>
  );
};
