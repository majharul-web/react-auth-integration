import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { singInUsingGoogle, singInUsingGithub } = useAuth();
  return (
    <div>
      <h2>Please login</h2>
      <button onClick={singInUsingGoogle}>google sing in</button>
      <button onClick={singInUsingGithub}>github sing in</button>
      <br />
      <Link to='/register'>New user?</Link>
    </div>
  );
};

export default Login;
