// Create a modal for Doctor using mongoose

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },
    level:{
        type: String,
        default:"doctor"
    },

    password: {
        type: String,
        required: true,
    },
    
    phone: {
        type: Number,
        required: true,

    },
    
    speciality: {
        type: String,
        required: true,
    },

    experience: {
        type: Number,
        required: true,
    },

    hospital: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    pincode: {
        type: Number,
        required: true,
    },
    patients: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ]
})

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;

