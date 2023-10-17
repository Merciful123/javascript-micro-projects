import React from "react";
import FormFieldLayout from "./FormFieldLayout";

const FormPanel = () => (
  <div className="form-panel">
    <div className="form-header">Sign in to your account...</div>
    <FormFieldLayout title="Username">
      <input type="text" />
    </FormFieldLayout>
    <FormFieldLayout title="Password">
      <input type="text" />
    </FormFieldLayout>
    <div className="button-holder">
      <button>Login</button>
      <button>Sign-up</button>
    </div>
  </div>
);

export default FormPanel;
