import React from "react";
import { Link } from "react-router-dom";
import * as DateHelper from "../utils/date.formatter";

export default props => {
  return (
    <ul className="box-list">
      {props.data.map(item => {
        return (
          <li key={item.key}>
            <Link to={`/sites/${item.key}`}>
              <strong>{item.name}</strong>
              <span>{item.key}</span>
              <em>{DateHelper.toLocalDateString(item.created)}</em>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
