import React, { FormEvent, useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
    const myNav = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMes, setErrorMes] = useState('');

    const goToHome = (e: FormEvent) => {
        e.preventDefault();

        console.log("login button pressed!!!!");
        console.log("user name---->" + userName);
        console.log("password---->" + password);

        axios.get("http://localhost:8080/four-wheeler/user/isValidUser?userName=" + userName
            + "&password=" + password).then(
                (res) => {
                    console.log("from spring boot app--->" + res.data);
                    if (res.data === true) {
                        myNav("/home");
                    } else {
                        setErrorMes("UserName and Password are not correct!!!!");
                    }
                }
            ).catch(error => {
                console.error("There was an error with the request:", error);
                setErrorMes("An error occurred. Please try again later.");
            });
    };

    return (
        <div>
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="user_card">
                        <div className="d-flex justify-content-center">
                            <div className="brand_logo_container">
                                <img
                                    src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                                    className="brand_logo"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center form_container">
                            <form onSubmit={goToHome}>
                                {errorMes}
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name=""
                                        onChange={(e) => setUserName(e.target.value)}
                                        className="form-control input_user"
                                        placeholder="username"
                                    />
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text">
                                            <i className="fas fa-key"></i>
                                        </span>
                                    </div>
                                    <input
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        name=""
                                        className="form-control input_pass"
                                        placeholder="password"
                                    />
                                </div>
                                <div className="d-flex justify-content-center mt-3 login_container">
                                    <button type="submit" name="button" className="btn login_btn">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
