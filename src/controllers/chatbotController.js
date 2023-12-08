require('dotenv').config
const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY,
});

async function findComplexity(req, res){
    try {
        
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo',
            prompt: req.body.text,
        });

        return res.status(200).json({
            success: true,
            data: response.data.choices[0].text
        });
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = {findComplexity};
