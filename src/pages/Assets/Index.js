import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAssetList,
  unloadAssetList
} from "../../redux/actions/asset.actions";
import AssetList from "../../components/AssetList";

function Assets() {
  const asset = useSelector(state => state.asset);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAssetList());
    return () => dispatch(unloadAssetList());
  }, []);

  if (!asset.assets) {
    return <div>loading...</div>;
  }
  return (
    <div id="main">
      <div id="content">
        <div id="content-wrap">
          <div className="box-header">
            <Link className="header-button" to="/assets/add">
              Add
            </Link>
            <h2>Asset List</h2>
          </div>
          <AssetList data={asset.assets} />
        </div>
      </div>
    </div>
  );
}

export default Assets;
