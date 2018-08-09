import React from "react";

export const FormBtn = props => (
  <button {...props} className="btn btn-info">
    {props.children}
  </button>
);