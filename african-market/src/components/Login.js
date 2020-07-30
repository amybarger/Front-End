import React, { useState, useEffect } from 'react';
import Nav from "./Nav"
import * as yup from "yup";
// import axios from "axios"; Furno's axios call

import { AxiosWithAuth } from '../utils/AxiosWithAuth';
import { useHistory } from 'react-router-dom';


const formSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
});

export default function LoginForm() {
  const [formState, setFormState] = useState({
    Password: "",
    Username: ""
  });
 const history = useHistory() 

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  const [errorState, setErrorState] = useState({
    password: "",
    username: ""
  });

  const validate = e => {
    let value =
      e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
        setErrorState({
          ...errorState,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const inputChange = e => {
    e.persist();
    validate(e);
    let value =
      e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  const formSubmit = user => {

    // formSubmit = e => {
      //   e.preventDefault();
      //   console.log("form submitted!");
      //   axios
      //     .post("https://build-week-app.herokuapp.com", formState)
      //     .then(response => console.log(response))
      //     .catch(err => console.log(err));
      // };
      AxiosWithAuth()
      .post('/api/login', user)
      .then((res) => {
        console.log(res, 'res from post');
        localStorage.setItem('token', JSON.stringify(res.data.token));
        localStorage.setItem('userId', JSON.stringify(res.data.data.id));
        history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
    };

  return (
    <div>
      <Nav />

      <form onSubmit={formSubmit}>

        <h2>Welcome</h2>
        <label htmlFor="usernameInput">
          Username

          <input
            id="usernameInput"
            type="username"
            name="username"

            value={formState.username}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="passwordInput">
          Password

          <input id="passwordInput"
            type="password"
            name="password"

            value={formState.password}
            onChange={inputChange}
          />
        </label>

        <button disabled={buttonDisabled}>Submit</button>
      </form>
    </div>
  );
}