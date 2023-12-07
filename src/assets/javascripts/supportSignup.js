import React, { useState, } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import techSupportlogo from "../images/output-onlinegiftools.gif";
import "bootstrap";
import { Link, useNavigate } from "react-router-dom";

function SupportSignup() {
    // Step 1: Set Up State
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [techID, setTechID] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error_msg, setErrorMsg] = useState("");

    // Step 2: Handle Input Changes
    function handleFirstNameChange(event) {
        setFirstName(event.target.value);
    }
    function handleZipCode(event) {
        setZipCode(event.target.value);
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleConfirmPasswordChange(event) {
        setConfirmPassword(event.target.value);
    }

    function handleTechIDChange(event) {
        setTechID(event.target.value);
    }

    //handle Signup form submission
    const handleSignupClick = async (event) => {
        event.preventDefault();
        // Handle signup logic here

        try {
            //axios post request to see if this email currently exists.
            var response = await axios.post(
                "http://192.168.1.106:5000/signup",
                {
                    username: email,
                    password: password,
                    techID: techID,
                }
            );

            var exists = response.data;
            navigate("/login", {
                state: {
                    success_msg:
                        "Successful Sign up Please verify email to login.",
                },
            });
        } catch (error) {
            // Extract the error message from the response
            const errorMessage = error.response
                ? error.response.data.message
                : error.message;
            setErrorMsg("Sign up Failed: " + errorMessage);
            setTimeout(() => {
                setErrorMsg("");
            }, 10000);
        }
    };

    // Handle Next Form Submission
    const handleNextClick = async (event) => {
        event.preventDefault();
        //check to see if there's any input to begin with.
        if (!techID || !zipcode) {
            console.log("wawaw goofy you have no tech id or zipcode");
        }
        try {
            var response = await axios.get("http://192.168.1.106:5000/techID", {
                params: {
                    id: techID,
                    zipcode: zipcode,
                },
            });
            // Handle successful login (if needed)
            // Redirect to another page, e.g., the dashboard

            var exists = response.data;
            if (exists.length > 0) {
                setStep(2);
                console.log("working");
            } else {
                setErrorMsg("Sign Up Failed, Tech ID Does not Exist.");
                setTimeout(() => {
                    setErrorMsg("");
                }, 10000);
            }
        } catch (error) {
            console.log(error.error);
            // Handle failed login (display error message, if needed)
            setErrorMsg("Sign Up Failed: " + error);
            setTimeout(() => {
                setErrorMsg("");
            }, 10000);
        }
    };

    return (
        <div className='signup-page'>
            <Header />
            <div className='signup-body'>
                {error_msg && (
                    <div className='alert alert-danger' role='alert'>
                        {error_msg}
                    </div>
                )}
                <div
                    className='signup-container'
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        minWidth: "980px",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}>
                    <div className='signup-content'>
                        <div className='signup-img'>
                            <img
                                src={techSupportlogo}
                                style={{ width: "400px" }}
                                alt='Tech Support'></img>
                        </div>
                    </div>
                    {step === 1 && (
                        <div
                            className='signup-form'
                            style={{
                                position: "relative",
                                width: "450px",
                                minWidth: "365px",
                                height: "auto",
                            }}>
                            <div
                                onSubmit={handleNextClick}
                                style={{ paddingTop: "10px" }}>
                                <form
                                    className='row'
                                    style={{
                                        width: "100%",
                                        paddingBottom: "10px",
                                    }}>
                                    <div className='col'>
                                        <label className='form-label'>
                                            TechID
                                        </label>
                                        <input
                                            name='techID'
                                            value={techID}
                                            onChange={handleTechIDChange}
                                            type='techID'
                                            className='form-control'
                                            id='techID'></input>
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
                                            Zip Code
                                        </label>
                                        <input
                                            name='zipcode'
                                            value={zipcode}
                                            onChange={handleZipCode}
                                            type='zipcode'
                                            className='form-control'
                                            id='zipcode'></input>
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
                                            type='next'
                                            className='btn btn-danger'
                                            style={{
                                                width: "100%",
                                                color: "white",
                                            }}>
                                            Next
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    {step === 2 && (
                        <div
                            className='signup-form'
                            style={{
                                position: "relative",
                                width: "450px",
                                minWidth: "365px",
                                height: "auto",
                            }}>
                            <div
                                onSubmit={handleSignupClick}
                                style={{ paddingTop: "10px" }}>
                                <form
                                    className='row'
                                    style={{
                                        width: "100%",
                                        paddingBottom: "10px",
                                    }}>
                                    <div className='col'>
                                        <label className='form-label'>
                                            First Name
                                        </label>
                                        <input
                                            name='firstname'
                                            value={firstName}
                                            onChange={handleFirstNameChange}
                                            type='firstname'
                                            className='form-control'
                                            id='firstname'></input>
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
                                            Last Name
                                        </label>
                                        <input
                                            name='lastname'
                                            value={lastName}
                                            onChange={handleLastNameChange}
                                            type='lastname'
                                            className='form-control'
                                            id='lastname'></input>
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
                                            Email
                                        </label>
                                        <input
                                            name='email'
                                            value={email}
                                            onChange={handleEmailChange}
                                            type='email'
                                            className='form-control'
                                            id='email'></input>
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
                                        <label className='form-label'>
                                            Confirm Password
                                        </label>
                                        <input
                                            name='password-confirm'
                                            value={confirmPassword}
                                            onChange={
                                                handleConfirmPasswordChange
                                            }
                                            type='password'
                                            className='form-control'
                                            id='password-confirm'></input>
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
                                            className='btn btn-danger'
                                            style={{
                                                width: "100%",
                                                color: "white",
                                            }}>
                                            Sign up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SupportSignup;
