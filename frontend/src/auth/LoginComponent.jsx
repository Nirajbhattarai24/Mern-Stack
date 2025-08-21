import React from "react";
import * as yup from "yup";
import { appendErrors, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from "../store/slice/AuthSlice";

let loginSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

function LoginComponent() {
  const {
    //these are all predefined function so dont get confused
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [userLogin] = useLoginMutation(); // we use [] inside userLogin because useLoginMutation returns array
  const LoginForm = (data) => {
    userLogin(data)
      .unwrap()
      .then((response) => {
        localStorage.setItem("token", response.token);
        window.location.href = "/admin";
      })
      .catch((error) => {
        setError("email", {
          type: "manual",
          message: error.data.message || "login failed",
        });
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>login Page</h1>
          <form action="" onSubmit={handleSubmit(LoginForm)}>
            <div className="form-group mb-3">
              <label htmlFor="email">
                Email
                {errors.email && (
                  <span className="text-danger">{errors.email.message}</span>
                )}
              </label>
              <input
                type="email"
                {...register("email")} // for reachookform-this will read input and use yup
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">
                Password
                {errors.password && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </label>
              <input
                type="password"
                {...register("password")}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <button className="btn btn-primary w-100"> Login </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
