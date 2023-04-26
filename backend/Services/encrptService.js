// Write a class to encrypt passwords using bcrypt

const bcrypt = require('bcrypt');

class EncryptService {
    static async encryptPassword(password) {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
}

module.exports = EncryptService;

