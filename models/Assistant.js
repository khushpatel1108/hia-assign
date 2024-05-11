const mongoose = require("mongoose");

const assistantschema = new mongoose.Schema({
     
    name : {
        type : String,
        required : true
    },

    mobile : {
        type : Number,
        required:true,
    },

    email : {
        type : String,
        required:true,
    },

    salary : {

        type : String ,
        required : true,
    },

    city : {


        type : String,
        required : true,
    },

    country : {

        type :String,
        required : true,
    },

    department : {

        type : String,
        required :true,
    },

    role : {

        type  : String,
        required : true
    }

});

module.exports = mongoose.model("assistant"  , assistantschema);