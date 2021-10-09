import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h3>Please Register</h3>
      <form>
        <input type='text' />
        <br />
        <input type='email' />
        <br />
        <input type='submit' value='submit' />
        <br />
        <Link to='/login'>Already Register?</Link>
      </form>
    </div>
  );
};

export default Register;
