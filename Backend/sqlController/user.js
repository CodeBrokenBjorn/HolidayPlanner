const router = require('../routes/route'); 
const utilities = require('../utilities/utility');
const db = require('../models');
const User = db.user; 

getALL = async (req, res) => {
    const user = await User.findAll();
    res.status(200).json(user);
}
//Don't need this instead need find info
// getByDesc = async (req, res)=> {
//     const desc = req.params.value;
//     try{
//         const user = await User.findALL(
//             {where: {desc}}
//         )
//     }

// }
getById = async (req, res) => {
    const id = req.params.id;
    try{
        const user = await User.findByPk(id);
        if(user = null || user.length ==0){
            throw new Error("Error you can't find Users ID" + id);

        }
        res.status(200).json(user);
    }
    catch(error){
        utilities.formatErrorResponse(res,400, error.message);

    }
}
module.exports = {getAll, getById};
