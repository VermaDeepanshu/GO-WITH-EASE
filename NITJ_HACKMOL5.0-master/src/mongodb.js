const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/hackmol2")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})


const TicketSchema = new mongoose.Schema({
    boarding_station:{
        type:String
    },
    destination_station:{
        type:String
    },
    train_number:{
        type:Number,
    },
    date:{
        type:Date
    },
    gmail:{
        type:String,
    },
    classType:{
        type:String,
    },
    quota:{
        type:String
    }  
});  

const TicketModel = new mongoose.model("Ticket", TicketSchema);

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})
   
const userModel = new mongoose.model("user",userSchema);

const ticketResponseSchema = new mongoose.Schema({
    data:[],
    ticketId:{
        type:mongoose.Schema.ObjectId,
        ref:"Ticket"
    }
})

const TicketResponse = new mongoose.model("TicketResponse",ticketResponseSchema);

module.exports = {
    TicketModel,
    TicketResponse,
    userModel
}