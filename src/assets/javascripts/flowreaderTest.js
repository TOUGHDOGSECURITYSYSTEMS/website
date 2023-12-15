// flowreaderTest.js
import React, { useState } from 'react';
import { parseDrawioXml } from '../../controllers/flowController';

function FlowreaderTest() {
    const [fileInput, setFileInput] = useState(null);
    const [parsedData, setParsedData] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileInput(file);

        const reader = new FileReader();
        reader.onload = function (e) {
            const drawioXml = e.target.result;
            const parsedXml = parseDrawioXml(drawioXml);
            setParsedData(parsedXml);
        };

        reader.readAsText(file);
    };

    return (
        <div>
            <div>
                <input type="file" onChange={handleFileChange} />
            </div>
            <div>
                <h1>Upcoming Events</h1>
                {/* Render content based on the parsed data */}
                {parsedData && (
                    <pre>{JSON.stringify(parsedData, null, 2)}</pre>
                )}
            </div>
        </div>
    );
}

export default FlowreaderTest;
