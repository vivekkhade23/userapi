const mongoose=require("mongoose")

const DbConnect =()=>{
    return mongoose.connect(`mongodb+srv://Vivekkhade:k@cluster0.vdzwl6o.mongodb.net/pra?retryWrites=true&w=majority`)
}

module.exports=DbConnect;

