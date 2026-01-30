const mongoose = require('mongoose');

const AdminSettingSchema = new mongoose.Schema(
  {
    adminEmail: { type: String, required: true },
    adminPassword: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AdminSetting', AdminSettingSchema);
