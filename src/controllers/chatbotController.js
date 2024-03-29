require("dotenv").config;
const { OpenAI } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const googleModel = new GoogleGenerativeAI(
    process.env.GOOGLE_API_KEY
).getGenerativeModel({ model: "gemini-pro-vision" });

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

async function chatgptbot(req, res) {


    //This Try catch loop is for the Assistant
    try {
        //console.log('assistant stuff stuff', await openai.beta.assistants.retrieve("asst_k19s58CbCGcnyWLzTbcFVKfn"));
        const myAssistant = await openai.beta.assistants.retrieve("asst_k19s58CbCGcnyWLzTbcFVKfn");
        const completion = await openai.chat.completions.create({
            messages: [
                {"role": "system", "content": myAssistant.instructions},
                {"role": "user", "content": req.body.text}

            ],
            model: myAssistant.model,
        });

        return res.status(200).json({
            success: true,
            data: completion.choices[0].message.content,
        }); 
    } catch (error) {

        console.log('broke within chatgpt bot thingy', error);
        
    }
    


    /* 
    try {
        console.log('im here');
        const response = await openai.completions.create({
            model: "gpt-4-1106-preview",
            prompt: req.body.text,
        });

        return res.status(200).json({
            success: true,
            data: response.data.choices[0].text,
        });
    } catch (error) {
        console.log(error);
    }
    */
    
}

async function googleAIBOT(req, res) {
    const fs = require("fs");

    // Converts local file information to a GoogleGenerativeAI.Part object.
    function fileToGenerativePart(path, mimeType) {
        return {
            inlineData: {
                data: Buffer.from(fs.readFileSync(path)).toString("base64"),
                mimeType,
            },
        };
    }

    const imageParts = [

        fileToGenerativePart(
            "C:/Users/Tdss/Desktop/TDSS WEBSITE/website/src/assets/images/botimages/0002.jpg",
            "image/jpeg"
        ),
        


    ];


    const prompt =
        ("Based on the image provided, read through the text in the image and answer the following support questions:\n",
        req.body.text);

    const result = await googleModel.generateContent([prompt, imageParts]);
    const response = await result.response;
    const text = response.text();
    return res.status(200).json({
        success: true,
        data: text,
    });
}

module.exports = { chatgptbot, googleAIBOT };
