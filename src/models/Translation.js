const mongoose = require('mongoose');

const TranslationSchema = new mongoose.Schema(
  {
    key: { type: String, required: true },
    lang: { type: String, required: true },
    value: { type: String, required: true },
  },
  { timestamps: true }
);

TranslationSchema.index({ key: 1, lang: 1 }, { unique: true });

module.exports = mongoose.model('Translation', TranslationSchema);
