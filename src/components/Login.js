import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [detail, setDetail] = useState({ email: "", password: "" });
  const nevigate=useNavigate();

  const onChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handelSubmit = () => {
    setDetail({ email: "", password: "" });
    nevigate('/');
  };

  return (
    <div className="container my-3">
      <h2 className=" container my-3">
        <small class="text-body-secondary ">Enter your detail's to LogIn</small>
      </h2>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            placeholder="email@email.com"
            name="email"
            value={detail.email}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            placeholder="Enter a secure password"
            type="password"
            name="password"
            value={detail.password}
            class="form-control"
            id="exampleInputPassword1"
            onChange={onChange}
          />
        </div>
        <button type="button" class="btn btn-secondary" onClick={handelSubmit} 
        disabled={detail.email.length<=3 || detail.password.length<=3}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
