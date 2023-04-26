// Create a modal for Doctor using mongoose

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nurseSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },
    level:{
        type: String,
        default:"nurse"
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

const Nurse = mongoose.model('Nurse', doctorSchema);

module.exports = Nurse;

