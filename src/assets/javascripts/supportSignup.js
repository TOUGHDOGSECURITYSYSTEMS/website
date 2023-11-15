import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import techSupportlogo from "../images/output-onlinegiftools.gif";
import "bootstrap";
import { Link } from "react-router-dom";

function SupportSignup() {
    // Step 1: Set Up State
    const usStates = [
        "AK - Alaska",
        "AL - Alabama",
        "AR - Arkansas",
        "AS - American Samoa",
        "AZ - Arizona",
        "CA - California",
        "CO - Colorado",
        "CT - Connecticut",
        "DC - District of Columbia",
        "DE - Delaware",
        "FL - Florida",
        "GA - Georgia",
        "GU - Guam",
        "HI - Hawaii",
        "IA - Iowa",
        "ID - Idaho",
        "IL - Illinois",
        "IN - Indiana",
        "KS - Kansas",
        "KY - Kentucky",
        "LA - Louisiana",
        "MA - Massachusetts",
        "MD - Maryland",
        "ME - Maine",
        "MI - Michigan",
        "MN - Minnesota",
        "MO - Missouri",
        "MS - Mississippi",
        "MT - Montana",
        "NC - North Carolina",
        "ND - North Dakota",
        "NE - Nebraska",
        "NH - New Hampshire",
        "NJ - New Jersey",
        "NM - New Mexico",
        "NV - Nevada",
        "NY - New York",
        "OH - Ohio",
        "OK - Oklahoma",
        "OR - Oregon",
        "PA - Pennsylvania",
        "PR - Puerto Rico",
        "RI - Rhode Island",
        "SC - South Carolina",
        "SD - South Dakota",
        "TN - Tennessee",
        "TX - Texas",
        "UT - Utah",
        "VA - Virginia",
        "VI - Virgin Islands",
        "VT - Vermont",
        "WA - Washington",
        "WI - Wisconsin",
        "WV - West Virginia",
        "WY - Wyoming",
    ];
    //const location = useLocation(); // Get the current location
    //const [reloadLinks, setReloadLinks] = useState([]); // Maintain a list of links that have been reloaded
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error_msg, setErrorMsg] = useState(""); // Define error_msg state
    //const [city, setCity] = useState('');
    const [selectedState, setSelectedState] = useState("Select a state"); // State dropdown

    // Step 2: Handle Input Changes
    function handleUserChange(event) {
        setUsername(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    // Step 4: Handle Form Submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            var response = await axios.post("http://localhost:5000/login", {
                username: username,
                password: password,
                withCredentials: true,
            });
            // Handle successful login (if needed)
            // Redirect to another page, e.g., the dashboard
            var user = response.data;
            console.log(user);
            window.location.href = "/";
        } catch (error) {
            // Handle failed login (display error message, if needed)
            setErrorMsg("Login Failed: " + error.response.data.message);
            setTimeout(() => {
                setErrorMsg("");
            }, 10000);
        }
    };
    // Handle State Select
    const handleStateSelect = (state) => {
        setSelectedState(state);
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
                    <div
                        className='signup-form'
                        style={{
                            position: "relative",
                            width: "450px",
                            minWidth: "365px",
                            height: "auto",
                        }}>
                        <div onSubmit={handleSubmit}>
                            
                            <form className='row' style={{width: '100%', paddingBottom: '10px'}}>
                                <div className='col'>
                                    <label className='form-label'>
                                        Purchase Location
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

                            <form className='row' style={{width: '100%', paddingBottom: '10px'}}>
                                <div className='col'>
                                    <label className='form-label'>
                                        Purchase Location
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

                            <form className='row' style={{width: '100%', paddingBottom: '10px'}}>
                                <div className='col'>
                                    <label className='form-label'>
                                        Main Format
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
                            <form className='row' style={{width: '100%', paddingBottom: '10px'}}>
                                <div className='col'>
                                    <button
                                        type='submit'
                                        className='btn'
                                        style={{
                                            backgroundColor: "red",
                                            color: "white",
                                        }}>
                                        Sign up
                                    </button>
                                    <Link
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

export default SupportSignup;
