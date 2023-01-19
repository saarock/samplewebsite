const jwt = require('jsonwebtoken');
// const { use } = require('../backend/router');
const Sechma = require('../database/secma/secma')



let user;
const auth = async function(req, res, next) {
try {
const token = await req.cookies.jjwt
const milyo = await jwt.verify(token, process.env.SECRET_KEY)
console.log(milyo)
console.log(`${milyo} verify user`)
user = await Sechma.findOne({_id: milyo._id})
 
//  console.log(user)
next()

} catch(error) {
    console.log(error)
}
}

// module.exports = user;
module.exports = auth;