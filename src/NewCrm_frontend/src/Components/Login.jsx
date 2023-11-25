import React from "react";
import lf from "../Styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Nav = useNavigate();

  const onSubmit = () => {
    let u = document.getElementById("username"); 
    let p = document.getElementById("password");

    var userNm = u.value;
    var userPass = p.value;

    if (userNm == "Aakarsh" && userPass == "Sutapa") {
      Nav("/dashboard");
    } else if (userNm == "Aakarsh" && userPass != "Sutapa") {
      alert("Please Check Your Password");
    } else {
      alert("User not found");
    }
  };
  return (
    <div className={lf.container}>
      <div className={lf.header}>
        <span className={lf.crm}>To-Do List</span>
      </div>
      <div className={lf.main}>
        <span className={lf.user}>User Admin</span>
        <span className={lf.login}>Login</span>
      </div>
      <div className={lf.field}>
        <input
          className={lf.input}
          id="username"
          type="text"
          placeholder="Username"
        />
        <input
          className={lf.input}
          id="password"
          type="password"
          placeholder="Password"
        />
        <button className={lf.sign} onClick={onSubmit}>Sign In</button>
      </div>
    </div>
  );
};

export { Login };
