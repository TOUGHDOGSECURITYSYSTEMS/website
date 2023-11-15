import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import techSupportlogo from "../images/output-onlinegiftools.gif";
import "bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login({ onSuccessfulLogin }) {
    // Step 1: Set Up State
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [staySignedIn, setStaySignedIn] = useState(false);
    const [error_msg, setErrorMsg] = useState(""); // Define error_msg state

    // Step 2: Handle Input Changes
    function handleUserChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    // Step 3: Handle Stay Signed In Checkbox
    function handleStaySignedInChange(event) {
        setStaySignedIn(event.target.checked);
    }

    // Step 4: Handle Form Submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            var response = await axios.post("http://192.168.1.106:5000/login", {
                username: username,
                password: password,
                withCredentials: true,
            });

            // Handle successful login (if needed)
            // Redirect to another page, e.g., the dashboard
            var user = response.data;
            console.log(user);
            onSuccessfulLogin();
            navigate("/dashboard");
        } catch (error) {
            // Handle failed login (display error message, if needed)
            setErrorMsg(
                "Login Failed: " +
                    (error.response
                        ? error.response.data.message
                        : error.message)
            );
            setTimeout(() => {
                setErrorMsg("");
            }, 10000);
        }
    };

    return (
        <div className='login-page'>
            <Header />
            <div className='login-body' style={{ height: "1000px" }}>
                {error_msg && (
                    <div className='alert alert-danger' role='alert'>
                        {error_msg}
                    </div>
                )}
                <div className=''></div>
                <div
                    className='login-container'
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: "600px",
                        minWidth: "980px",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}>
                    <div
                        className='login-content'
                        style={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "400px",
                        }}>
                            <img
                                src={techSupportlogo}
                                style={{ width: "400px" }}
                                alt='Tech Support'></img>
                    </div>
                    <div
                        className='login-form'
                        style={{
                            position: "relative",
                            width: "450px",
                            minWidth: "365px",
                        }}>
                        <div onSubmit={handleSubmit}>
                            <form
                                className='row'
                                style={{
                                    width: "100%",
                                    paddingBottom: "10px",
                                }}>
                                <div className='col' id=''>
                                    <label className='form-label'>TechId</label>
                                    <input
                                        name='username'
                                        value={username}
                                        onChange={handleUserChange}
                                        type='text'
                                        id='username'
                                        className='form-control'></input>
                                </div>
                            </form>
                            <form
                                className='row'
                                style={{
                                    width: "100%",
                                    paddingBottom: "10px",
                                }}>
                                <div className='col'>
                                    <label className='form-label'>
                                        Password
                                    </label>
                                    <input
                                        name='password'
                                        value={password}
                                        onChange={handlePasswordChange}
                                        type='password'
                                        className='form-control'
                                        id='password'></input>
                                </div>
                            </form>
                            <form
                                className='row'
                                style={{
                                    width: "100%",
                                    paddingBottom: "10px",
                                }}>
                                <div className='col'>
                                    <div className='form-check'>
                                        <input
                                            checked={staySignedIn}
                                            onChange={handleStaySignedInChange}
                                            style={{
                                                backgroundColor: staySignedIn
                                                    ? "red"
                                                    : "white",
                                                borderColor: staySignedIn
                                                    ? "red"
                                                    : "black",
                                            }}
                                            className='form-check-input'
                                            type='checkbox'
                                            id='gridCheck'></input>
                                        <label className='form-check-label'>
                                            Stay Signed In
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <form
                                className='row'
                                style={{
                                    width: "100%",
                                    paddingBottom: "10px",
                                }}>
                                <div className='col'>
                                    <button
                                        type='submit'
                                        className='btn'
                                        style={{
                                            backgroundColor: "red",
                                            color: "white",
                                        }}>
                                        Sign in
                                    </button>
                                    <Link
                                        to='/signup'
                                        className='createtechid'
                                        style={{
                                            paddingLeft: "20px",
                                            textDecoration: "none",
                                            color: "red",
                                        }}>
                                        Don't have an account? Click Here!
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
