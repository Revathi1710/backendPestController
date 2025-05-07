const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }, // Email will not have a unique constraint
    number: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    businessType:{ type: String, required: true }
}, { collection: 'UserInfo' });

module.exports = mongoose.model('User', userSchema);
