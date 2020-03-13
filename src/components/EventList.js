import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <table className="table-list-simple">
      <thead>
        <tr>
          <th>Site</th>
          <th>Asset</th>
          <th>Type</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => {
          return (
            <tr key={item.key}>
              <td className="sub">
                <Link to={`/sites/${item.key}`}>{item.site}</Link>
              </td>
              <td className="sub">
                <Link to={`/assets/${item.key}`}>{item.asset}</Link>
              </td>
              <td className="sub">
                <Link to={`/assets/${item.type}`}>{item.type}</Link>
              </td>
              <td className="sub last">
                <Link to={`/assets/${item.key}`}>{item.created}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
