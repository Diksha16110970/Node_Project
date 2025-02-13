const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/RegisterLogin", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.catch((err) => console.error("Failed to connect:", err));

const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection = new mongoose.model("Collection1",LoginSchema)
module.exports = collection