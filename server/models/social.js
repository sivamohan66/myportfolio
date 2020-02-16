const mongoose = require('mongoose');
import Education from '../../src/components/education';
const Schema = mongoose.Schema;
const socialSchema = new Schema(
  {
    phone: Number,
    email: String,
    other: [{
      socialMediaName: String,
      url: String
    }]
  }
);

const Social = mongoose.model('Social', socialSchema);
module.exports = Social;
