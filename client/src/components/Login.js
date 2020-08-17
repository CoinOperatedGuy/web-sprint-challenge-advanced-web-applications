
import React, {useState} from "react";

import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {
  const [person, setPerson] = useState({username: "", password: ""});

  const handleChanges = e => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('./Login', person)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('./BubblePage')
        console.log(res);
      });
  }
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          value={person.username}
          onChange={handleChanges}
          placeholder="username"
        />
        <input
          type="password"
          name='password'
          value={person.password}
          onChange={handleChanges}
          placeholder="password"
        />
        <button>Log-In</button>
      </form>
    </>
  );
};

export default Login;
