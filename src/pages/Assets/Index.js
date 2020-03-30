import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssetList,
  unloadAssetList
} from "../../redux/actions/asset.actions";
import AssetList from "../../components/AssetList";
import Nav from "../../components/Nav";
import Header from "../../components/Header";

function Assets() {
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssetList());
    return () => dispatch(unloadAssetList());
  }, []);

  if (!asset.assets) {
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
  return (
    <div id="main">
      <Nav />
      <div id="content">
        <Header />
        <div className="content-wrap">
          <div className="box-header">
            <Link className="header-button" to="/assets/add">
              Create Asset
            </Link>
            <h2>Assets</h2>
          </div>
          <AssetList data={asset.assets} />
        </div>
      </div>
    </div>
  );
}

export default Assets;
