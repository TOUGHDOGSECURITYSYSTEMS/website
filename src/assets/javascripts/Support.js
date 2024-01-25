import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import techSupportbackground from "../images/techsupportbackgroundimg.png";
import techSupportlogo from "../images/techsupportlogo.png";
import "../stylings/support.css";
import { Link } from "react-router-dom";
import axios from "axios";

function sendpostrequest(input) {
    console.log("entering send email");
    const sendingtest = async () => {
        try {
            // Make a POST request to the sendEmail endpoint
            const response = await axios.post(
                "http://localhost:5000/googebot",
                {text: input}
            );

            // Handle success, e.g., show a success message to the user
            console.log("Email sent successfully", response.data );
        } catch (error) {
            // Handle error, e.g., show an error message to the user
            console.error("Error sending email:", error);
        }
    };
    sendingtest(input);
}


function Support() {
    const [userinput, setUserInput] = useState("");
    function handleUserChange(event) {
        setUserInput(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Making post request");
        sendpostrequest(userinput);
    };

    return (
        <div className='support-container'>
            <Header />
            <div className='techsupport-body'>
                <div className='techsupport-container'>
                    <div className='techsupport-img'>
                        <div className='whitefilter'></div>
                        <img
                            src={techSupportbackground}
                            alt='Tech Support'
                            style={{
                                minWidth: "980px",
                                height: "550px",
                                width: "100%",
                            }}></img>
                    </div>
                    <div className='techsupport-content fadeInRight'>
                        <div className='techsupport-title'>
                            <h1>TECH SUPPORT</h1>
                        </div>
                        <div className='techsupport-slogan'>
                            <h1>
                                We are working on providing the most timely and
                                best service to all customers.
                            </h1>
                        </div>

                        <div className='logo-container'>
                            <div className='techsupport-logo'>
                                <img src={techSupportlogo} alt=''></img>
                            </div>
                        </div>

                        <div className='techid-form'>
                            <Link className='techid-link' to='/login'>
                                <div className='techidbutton-container'>
                                    <span className='techidbutton-text'>
                                        HAVING TROUBLE? CLICK HERE!
                                    </span>
                                    <span className='techidbutton-svg'>
                                        <div>
                                            <svg
                                                data-bbox='9 70.9 181 59'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 200 200'>
                                                <g>
                                                    <path
                                                        d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'
                                                        style={{
                                                            fill: "red",
                                                        }}></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='techresources-container'>
                    <div className='techresources-buttons'>
                        <div className='techresources-rows fadeInRight'>
                            <div
                                className='button archive-button'
                                style={{ height: "303px", width: "271px" }}>
                                <Link to='' className='techresources-link'>
                                    <div
                                        className='card custom-gradient-bg border-top-0 shadow-lg'
                                        style={{
                                            height: "303px",
                                            width: "271px",
                                            backgroundColor: "rgb()",
                                        }}>
                                        <div className='buttonborder border-top border-2 border-white'></div>
                                        <div className='card-body d-flex justify-content-center align-items-center p-0'>
                                            <div className='text-container'>
                                                <h1>ARCHIVE</h1>
                                                <span className='techresources-arrow'>
                                                    <div>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 200 200'
                                                            data-bbox='9 70.9 181 59'>
                                                            <g>
                                                                <path d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className='button tutorial-button'
                                style={{ height: "303px", width: "293px" }}>
                                <Link to='' className='techresources-link'>
                                    <div
                                        className='card custom-gradient-bg border-top-0 shadow-lg'
                                        style={{
                                            height: "303px",
                                            width: "293px",
                                        }}>
                                        <div className='buttonborder border-top border-2 border-white'></div>
                                        <div className='card-body d-flex justify-content-center align-items-center p-0'>
                                            <div className='text-container'>
                                                <h1>TUTORIAL</h1>
                                                <span className='techresources-arrow'>
                                                    <div>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 200 200'
                                                            data-bbox='9 70.9 181 59'>
                                                            <g>
                                                                <path d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className='button manuals-button'
                                style={{ height: "303px", width: "271px" }}>
                                <Link to='' className='techresources-link'>
                                    <div
                                        className='card custom-gradient-bg border-top-0 shadow-lg'
                                        style={{
                                            height: "303px",
                                            width: "271px",
                                        }}>
                                        <div className='buttonborder border-top border-2 border-white'></div>
                                        <div className='card-body d-flex justify-content-center align-items-center p-0'>
                                            <div className='text-container'>
                                                <h1>MANUALS</h1>
                                                <span className='techresources-arrow'>
                                                    <div>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 200 200'
                                                            data-bbox='9 70.9 181 59'>
                                                            <g>
                                                                <path d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='techresources-rows fadeInRight'>
                            <div
                                className='button diagrams-button'
                                style={{ height: "303px", width: "280px" }}>
                                <Link to='' className='techresources-link'>
                                    <div
                                        className='card custom-gradient-bg border-top-0 shadow-lg'
                                        style={{
                                            height: "303px",
                                            width: "280px",
                                        }}>
                                        <div className='buttonborder border-top border-2 border-white'></div>
                                        <div className='card-body d-flex justify-content-center align-items-center p-0'>
                                            <div className='text-container'>
                                                <h1>DIAGRAMS</h1>
                                                <span className='techresources-arrow'>
                                                    <div>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 200 200'
                                                            data-bbox='9 70.9 181 59'>
                                                            <g>
                                                                <path d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className='button software-button'
                                style={{ height: "303px", width: "586px" }}>
                                <Link to='' className='techresources-link'>
                                    <div
                                        className='card custom-gradient-bg border-top-0 shadow-lg'
                                        style={{
                                            height: "303px",
                                            width: "586px",
                                        }}>
                                        <div className='buttonborder border-top border-2 border-white'></div>
                                        <div className='card-body d-flex justify-content-center align-items-center p-0'>
                                            <div className='text-container'>
                                                <h1>SOFTWARE DOWNLOADS</h1>
                                                <span className='techresources-arrow'>
                                                    <div>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 200 200'
                                                            data-bbox='9 70.9 181 59'>
                                                            <g>
                                                                <path d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='techresources-rows fadeInRight'>
                            <div
                                className='button presentations-button'
                                style={{ height: "303px", width: "393px" }}>
                                <Link to='' className='techresources-link'>
                                    <div
                                        className='card custom-gradient-bg border-top-0 shadow-lg'
                                        style={{
                                            minHeight: "303px",
                                            width: "393px",
                                        }}>
                                        <div className='buttonborder border-top border-2 border-white'></div>
                                        <div className='card-body d-flex justify-content-center align-items-center p-0'>
                                            <div className='text-container'>
                                                <h1>PRESENTATIONS</h1>
                                                <span className='techresources-arrow'>
                                                    <div>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 200 200'
                                                            data-bbox='9 70.9 181 59'>
                                                            <g>
                                                                <path d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div
                                className='button marketing-button'
                                style={{ height: "303px", width: "327px" }}>
                                <Link to='' className='techresources-link'>
                                    <div
                                        className='card custom-gradient-bg shadow-lg border-top-0 d-flex'
                                        style={{
                                            height: "303px",
                                            width: "327px",
                                        }}>
                                        <div className='buttonborder border-top border-2 border-white'></div>
                                        <div className='card-body d-flex justify-content-center align-items-center'>
                                            <div className='text-container'>
                                                <h1>MARKETING</h1>
                                                <span className='techresources-arrow'>
                                                    <div>
                                                        <svg
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            viewBox='0 0 200 200'
                                                            data-bbox='9 70.9 181 59'>
                                                            <g>
                                                                <path d='M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z'></path>
                                                            </g>
                                                        </svg>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    >
                    <form
                        className='row'
                        style={{
                            width: "50%",
                            paddingBottom: "10px",
                        }}>
                        <div className='col' id='chatbot'>
                            <label className='form-label'>
                                Please Ask A question
                            </label>
                            <input
                                name='userinput'
                                value={userinput}
                                onChange={handleUserChange}
                                type='text'
                                id='userinput'
                                className='form-control'></input>
                        </div>
                    </form>
                    <form
                        className='row'
                        style={{
                            width: "50%",
                            paddingBottom: "10px",
                            justifyContent: "center",
                        }}
                        onSubmit={handleSubmit}>
                        <div className='col'>
                            <button
                                type='submit'
                                className='btn'
                                style={{
                                    backgroundColor: "red",
                                    color: "white",
                                }}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Support;
