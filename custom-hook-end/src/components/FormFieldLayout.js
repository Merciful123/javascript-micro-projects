import React from "react";

const FormFieldLayout = ({ title, children }) => (
  <div className="form-field-holder">
    <div className="form-field-title">{title}</div>
    <div className="form-field-input">{children}</div>
  </div>
);

export default FormFieldLayout;
