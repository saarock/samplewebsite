const mongoose = require('mongoose');
const DB = process.env.DATABASE
console.log(process.env.DATABASE)


const Mg =  mongoose.connect (DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true


}).then(data => {
    console.log('done')
}).catch(() =>{
    console.log('wr')
})


module.exports = mongoose