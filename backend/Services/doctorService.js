

const Doctor = require('../models/Doctor');
const EncryptService = require('./encrptService');

class DoctorService {
    // Add a doctor to database
    static async addDoctor(doctor) {
        const encryptedPassword = await EncryptService.encryptPassword(doctor.password);
        doctor.password = encryptedPassword;
        const newDoctor = new Doctor(doctor);
        return await newDoctor.save();
    }

    // Get a doctor from database
    static async getDoctor(email) {
        const doctor=Doctor.findOne({email:email});
        return doctor;
    }

    // Get patient of a doctor from database
    static async getPatients(email) {
        const doctor=Doctor.findOne({email:email});
        return doctor.patients;
    }
}

module.exports = DoctorService;




        