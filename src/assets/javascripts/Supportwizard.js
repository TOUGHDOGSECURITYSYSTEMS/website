import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import techSupportlogo from "../images/output-onlinegiftools.gif";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


var emailData = {
    to: "abner.p@tdsecuritysystems.com",
    subject: "Hello",
    text: "Hello",
};

//Gets the data from the database
async function getData(id) {
    try {
        const response = await axios.get(
            `http://192.168.1.106:5000/api/entry/${id}`
        );
        return response.data; // Return the data from the response
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Return null in case of an error
    }
}

function SendEmail(emailDetails) {
    console.log("entering send email");
    const sendingEmail = async () => {
        try {
            // Make a POST request to the sendEmail endpoint
            await axios.post(
                "http://192.168.1.106:5000/api/sendEmail",
                emailDetails
            );

            // Handle success, e.g., show a success message to the user
            console.log("Email sent successfully");
        } catch (error) {
            // Handle error, e.g., show an error message to the user
            console.error("Error sending email:", error);
        }
    };

    console.log(sendingEmail(emailDetails));
}

function TechSupport() {
    const navigate = useNavigate();
    const [buttonData, setButtonData] = useState([]);
    const [buttonHistory, setButtonHistory] = useState([]); // Maintain history of buttonData states
    const [ResourceData, setResourceData] = useState([]);
    const [ResourceDataHistory, setResourceDataHistory] = useState([]);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Fetch data and initialize buttonData state
        async function fetchData() {
            const data = await getData(1); // Assuming ID 1 for initial state
            if (data !== null) {
                setButtonData(data[0]);
                setButtonHistory([data[0]]);
                if (data[0].resource_links) {
                    const imageModules = [];
                    // Assuming resource_link contains the image filenames as an array
                    const imageFilenames = data[0].resource_links;
                    try {
                        // Load each image module and push it to the array
                        for (const imageFilename of imageFilenames) {
                            const imageModule = await import(
                                `../../assets/images/${imageFilename}`
                            );
                            imageModules.push(imageModule.default);
                        }

                        // Set the array of image modules
                        setResourceData(imageModules);
                        setResourceDataHistory((prevHistory) => [
                            ...prevHistory,
                            imageModules,
                        ]);
                    } catch (error) {
                        console.error("Error loading image:", error);
                        // Handle the error as needed
                    }
                } else {
                    setResourceData([]); // Set to null or handle the error as needed
                }
            }
        }
        fetchData();
    }, []); // Empty array ensure effect runs once

    // Function to handle button click
    function handleButtonClick(buttonIndex, nextIDs) {
        async function fetchData(id) {
            setAnimate(false);
            const data = await getData(nextIDs[buttonIndex]);
            if (data !== null) {
                setAnimate(true);
                setButtonData(data[0]);
                if (data[0].resource_links && data[0].id !== 699669) {
                    // Assuming resource_link contains the image filename
                    // You can derive the image path based on some conditions
                    const imageModules = [];
                    const imageFilenames = data[0].resource_links;
                    try {
                        for (const imageFilename of imageFilenames) {
                            const imageModule = await import(
                                `../../assets/images/${imageFilename}`
                            );
                            imageModules.push(imageModule.default);
                        }

                        // Set the array of image modules
                        setResourceData(imageModules);
                        setResourceDataHistory((prevHistory) => [
                            ...prevHistory,
                            imageModules,
                        ]);
                    } catch (error) {
                        console.error("Error loading image:", error);
                        // Handle the error as needed
                    }
                } else if (data[0].id === 699669) {
                    console.log("made it here");
                    SendEmail(emailData);
                } else {
                    setResourceData([]); // Set to null or handle the error as needed
                    setResourceDataHistory((prevHistory) => [
                        ...prevHistory,
                        null,
                    ]);
                }
                setButtonHistory((prevHistory) => [...prevHistory, data[0]]);
            }
        }
        fetchData();
    }

    // Function to reset to original data
    function handleReset() {
        setButtonData(buttonHistory[0]);
        setButtonHistory([buttonHistory[0]]);
        setResourceData([]); // Set to null or handle the error as needed
        setResourceDataHistory([]);
    }

    // Function to go back to the previous state
    function handleBack() {
        if (buttonHistory.length > 1) {
            const previousState = buttonHistory[buttonHistory.length - 2];
            setButtonData(previousState);
            setButtonHistory((prevHistory) => prevHistory.slice(0, -1));
        }

        if (ResourceDataHistory.length > 1) {
            const previousState =
                ResourceDataHistory[ResourceDataHistory.length - 2];
            setResourceData(previousState);
            setResourceDataHistory((prevHistory) => prevHistory.slice(0, -1));
        }
    }

    return (
        <div>
            <Header />
            <div
                className='container-fluid mt-0 d-flex flex-column justify-content-center'
                style={{ minWidth: "980px", maxHeight: "700px" }}>
                <p
                    className={`d-flex justify-content-center ${
                        animate ? "fadeInRight" : ""
                    }`}
                    style={{
                        fontWeight: "bold",
                        font: "var(--font-1)",
                        fontSize: "35px",
                    }}>
                    {buttonData.question}
                </p>

                <div
                    className={`d-flex justify-content-center ${
                        animate ? "fadeInRight" : ""
                    }`}
                    style={{ maxHeight: "700px", minHeight: "200px" }}>
                    {ResourceData !== null &&
                    buttonData.id !== 699669 &&
                    buttonData.resource_links !== null
                        ? ResourceData.map((image, imageIndex) => (
                              <img
                                  key={imageIndex}
                                  src={image}
                                  alt='Logo'
                                  height='500px'
                                  style={{ marginLeft: "2rem" }}
                              />
                          ))
                        : buttonData.id === 5
                        ? ResourceData.map((image, imageIndex) => (
                              <img
                                  key={imageIndex}
                                  src={image}
                                  alt='Logo'
                                  height='500px'
                              />
                          ))
                        : buttonData.id === 1 && (
                              <img src={techSupportlogo} alt='' height='auto' />
                          )}
                </div>
                <div className='d-flex justify-content-center'>
                    {buttonData.keywords &&
                        buttonData.keywords.map((text, buttonIndex) => (
                            <button
                                key={buttonIndex}
                                className='btn btn-danger m-2 btn-lg'
                                onClick={() =>
                                    handleButtonClick(
                                        buttonIndex,
                                        buttonData.followup_id
                                    )
                                }
                                data-nextids={buttonData.followup_id}
                                data-question={buttonData.question}>
                                {text}
                            </button>
                        ))}
                </div>
                <div className='pdfLinks d-flex justify-content-center'>
                    {buttonData.pdflinks &&
                        buttonData.pdflinks.length > 0 &&
                        buttonData.pdflinks.map((pdfLink, index) => (
                            <a
                                key={index}
                                href={pdfLink} // Assuming pdfLink is the URL to the PDF
                                target='_blank' // Opens link in a new tab
                                rel='noopener noreferrer'>
                                <button className='btn btn-primary m-2'>
                                     {index + 1}
                                </button>
                            </a>
                        ))}
                </div>
                <div className='d-flex justify-content-center'>
                    {buttonData.id !== 1 && ( // Check if buttonData.id is not 1
                        <>
                            <button
                                className='btn btn-dark m-2'
                                onClick={handleReset}>
                                Reset
                            </button>
                            <button
                                className='btn btn-dark m-2'
                                onClick={handleBack}>
                                Back
                            </button>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TechSupport;
