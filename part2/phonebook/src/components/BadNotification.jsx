import React from "react";

const BadNotification = ({ message }) => {
  if (message === "") {
    return null;
  }

  return <div className="error">{message}</div>;
};

export default BadNotification;
