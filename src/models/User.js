const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    profileInfo: { type: String },
    password: { type: String, required: true },
    state: { type: String, required: true },
    role: { type: String, enum: ['jobSeeker', 'businessOwner'], required: true },
    providesService: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
