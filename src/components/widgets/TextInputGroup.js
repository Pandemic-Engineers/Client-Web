import React from "react";
import classnames from "classnames";

const InputFeedback = ({ error }) =>
  error ? <div className="error-message">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return <label {...props}>{children}</label>;
};

const TextInputGroup = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "form-item",
    {
      error: !!error
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input id={id} type={type} value={value} onChange={onChange} {...props} />
      <InputFeedback error={error} />
    </div>
  );
};
export { TextInputGroup };
