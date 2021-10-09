import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3>This is Home</h3>
      <h4>User:{user.displayName}</h4>
    </div>
  );
};

export default Home;
