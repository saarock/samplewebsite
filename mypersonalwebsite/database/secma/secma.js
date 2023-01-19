const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 12;

const jwt = require('jsonwebtoken');

// const Scheme = mongoose.Schema;


const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        
    },
    lastname: {
        type: String,
       
        required : true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password : {
        type: String,
        required: true,
        unique: true

    
        
    },
    tokens:
    [
    
         {
        token :{
        type: String,
        required: true
        }
    }
]

})


//We are generation the jwt token
ItemSchema.methods.generateToken = async function(){
    try {
        console.log('This is your id' +this._id)
        const token = await jwt.sign({_id: this._id.toString()}, process.env.SECRET_KEY)
        console.log(token+ "idichchha")
  this.tokens = await this.tokens.concat({token:token})
       
     await this.save()
    //   console.log(tokenn)
    //    await this.tokens.save()
        console.log("token"+ this.tokens)
        return token

    }catch(error) {
        console.log("Your error is"+error)
    }
}



// console.log(ItemSchema);
// const here = 
ItemSchema.pre('save', async function(next) {
    if(this.isModified('password')) {
        this.password =  await bcrypt.hash(this.password, saltRounds);
        
    }
    next()
})





const Model = new mongoose.model('User', ItemSchema);







module.exports = Model;

