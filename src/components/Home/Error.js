import React from "react";

const Error = ({message}) => {
  return(
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>{message}</strong>
    </div>
  );
}

export default Error;