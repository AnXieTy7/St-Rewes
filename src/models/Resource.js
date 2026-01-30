const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String },
    link: { type: String },
    description: { type: String },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Resource', ResourceSchema);
