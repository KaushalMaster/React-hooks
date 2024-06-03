import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>User</h1>
      <p>User ID: {id}</p>
    </div>
  );
};

export default User;
