





const Nurse = require('../models/Nurse');
const EncryptService = require('./encrptService');

class NurseService {

    static async addNurse(nurse) {
        const encryptedPassword = await EncryptService.encryptPassword(doctor.password);
        doctor.password = encryptedPassword;
        const newNurse = new Nurse(nurse);
        return await newNurse.save();
    }
    static async getDoctor(email) {
        const nurse=Nurse.findOne({email:email});
        return nurse;
    }
    static async getPatients(email) {
        const nurse=Nurse.findOne({email:email});
        return nurse.patients;
    }
}

module.exports = NurseService;




        