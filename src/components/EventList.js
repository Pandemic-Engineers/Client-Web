import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <table className="table-list-simple">
      <thead>
        <tr>
          <th>Time</th>
          <th>Asset</th>
          <th>Value</th>
          <th>Site</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => {
          return (
            <tr key={item.key}>
              <td className="sub">
                <Link to={`/events/${item.key}`}>{item.created}</Link>
              </td>
              <td className="sub">
                <Link to={`/events/${item.key}`}>{item.asset}</Link>
              </td>
              <td className="sub">
                <Link to={`/events/${item.key}`}>{item.value}</Link>
              </td>
              <td className="sub last">
                <Link to={`/events/${item.key}`}>{item.site}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
