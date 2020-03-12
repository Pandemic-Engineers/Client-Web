import React from "react";
export default props => {
  const errors = props.errors;
  if (errors) {
    // for (let [key, value] of Object.entries(errors)) {
    //     <div className="errorMessages" key={key}>{value}</div>
    // }
    return Object.keys(errors).map(key => {
      return (
        <div className="form-item error-message" key={key}>
          {errors[key].message || errors[key]}
        </div>
      );
    });
  }
  return null;
};
