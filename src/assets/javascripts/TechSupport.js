import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import '../stylings/support.css'

async function getData(id) {
  try {
    const response = await axios.get(`http://localhost:5000/api/entry/${id}`);
    return response.data; // Return the data from the response
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; // Return null in case of an error
  }
}

function TechSupport() {
  const [buttonData, setButtonData] = useState([]);
  const [buttonHistory, setButtonHistory] = useState([]); // Maintain history of buttonData states

  useEffect(() => {
    // Fetch data and initialize buttonData state
    async function fetchData() {
      const data = await getData(1); // Assuming ID 1 for initial state
      if (data !== null) {
        setButtonData(data[0]);
        setButtonHistory([data[0]]);
      }
    }
    fetchData();
  }, []); // Empty array ensure effect runs once

  // Function to handle button click
  function handleButtonClick(buttonIndex, nextIDs) {
    async function fetchData(id) {
      const data = await getData(nextIDs[buttonIndex]);
      if (data !== null) {
        setButtonData(data[0]);
        setButtonHistory(prevHistory => [...prevHistory, data[0]]);
      }
    }
    fetchData();
  }

  // Function to reset to original data
  function handleReset() {
    setButtonData(buttonHistory[0]);
    setButtonHistory([buttonHistory[0]]);
  }

  // Function to go back to the previous state
  function handleBack() {
    if (buttonHistory.length > 1) {
      const previousState = buttonHistory[buttonHistory.length - 2];
      setButtonData(previousState);
      setButtonHistory(prevHistory => prevHistory.slice(0, -1));
    }
  }

  return (
    <div>
      <Header/>
      <div className="container-fluid mt-0">
        <h1>Customer Support</h1>
        <p>{buttonData.question}</p>
        <div className='d-flex justify-content-center'>
          {buttonData.keywords &&
            buttonData.keywords.map((text, buttonIndex) => (
              <button
                key={buttonIndex}
                className="btn btn-danger m-2"
                onClick={() => handleButtonClick(buttonIndex, buttonData.followup_id)}
                data-nextids={buttonData.followup_id}
                data-question={buttonData.question}
              >
                {text}
              </button>
            ))}
        </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-dark m-2 width=100px' onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-dark m-2" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default TechSupport;