import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <table className="table-list-simple">
      <thead>
        <tr>
          <th>Key</th>
          <th>Name</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => {
          return (
            <tr key={item.key}>
              <td className="important">
                <Link to={`/assets/${item.key}`}>{item.key}</Link>
              </td>
              <td className="sub">
                <Link to={`/assets/${item.key}`}>{item.name}</Link>
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
