const mongoose = require('mongoose');

const MentalHealthProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    license: { type: String, required: true },
    specialty: { type: String },
    location: { type: String },
    bio: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('MentalHealthProfile', MentalHealthProfileSchema);
