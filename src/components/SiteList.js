import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <ul className="box-list">
      {props.data.map(item => {
        return (
          <li key={item.key}>
            <Link to={`/sites/${item.key}`}>
              <strong>{item.name}</strong>
              <span>{item.key}</span>
              <em>{new Date(item.created).toDateString()}</em>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
