// controllers/SupportController.js
const supportModel = require('../models/SupportModel')

//GET 
async function getKBentry(req, res){

    //validate inputs
    const id = req.params.id;
    try{
        const result = await supportModel.getkbentry(id);
        return res.json(result.rows)

    }catch(err){
        res.status(500).json("An Error occured")
    }

}


module.exports = {
    getKBentry,
}