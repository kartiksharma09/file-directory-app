const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = async (req,res,next)=>{
    try{
        const defaultUser = await User.findOne({username:'kartiksharma'});
        if(!defaultUser)
            return res.status(401).send({ error: 'No default user found' });
        req.user=defaultUser;
        next();
    }
    catch(err){
        return res.status(401).send({ error: 'Error retrieving User' });
    }

}