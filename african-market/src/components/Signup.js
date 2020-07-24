
import React, { useState, useEffect } from "react";
import Nav from "./Nav"
import * as yup from "yup";
import axios from "axios";


const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup
        .string()
        .email("Email address required")
        .required("Must include email address"),
    password: yup.string().required(),
    terms: yup.boolean().oneOf([true], "Please agree to term to continue")
});


export default function Signup() {

    const [formState, setFormState] = useState({
        Email: "",
        Name: "",
        password: "",
        username: ""
        
    });


    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        password: "",
        username: ""
    });


    const validate = e => {
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
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
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post("https://reqres.in/api/users", formState)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Nav />
            <form onSubmit={formSubmit}>
                <h2> Welcome</h2>
                <label htmlFor="name">
                    Full Name
          <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="username">
                    Username 
          <input
                        type="text"
                        name="name"
                        id="name"
                        value={formState.name}
                        onChange={inputChange}
                    />
                </label>

                <label htmlFor="email">
                    Email
          <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={inputChange}
                    />
                    {errorState.email.length > 0 ? (
                        <p className="error">{errorState.email}</p>
                    ) : null}
                </label>

                <label htmlFor="password">
                    Password
          <input
                        type="password"
                        name="password"
                        id="password"
                        value={formState.password}
                        onChange={inputChange}
                    />
                    {errorState.password.length > 0 ? (
                        <p className="error">{errorState.password}</p>
                    ) : null}
                </label>


                <button disabled={buttonDisabled}>Submit</button>
            </form>
        </div>
    );
}

