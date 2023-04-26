// Create a modal for patient using mongoose with fields 

const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const patientSchema=new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    level:{
        type: String,
        default:"patient"
    },
    phone:{
        type:Number,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },

})

const Patient=mongoose.model('Patient',patientSchema);

module.exports=Patient;