import React from "react";
import { ErrorMessage } from "formik";

export default function FormError({ name }) {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="text-red-600 text-sm mt-1"
    />
  );
}
