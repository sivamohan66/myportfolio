const mongoose = require('mongoose');
import Education from '../../src/components/education';
const Schema = mongoose.Schema;
const aboutSchema = new Schema(
  {
    summary: { type: String },
    images: [{
      url: String,
      description: String
    }],
    timestamp: { type: Date, default: new Date(), immutable: true }
  },
  { autoIndex: false }
);

const About = mongoose.model('About', aboutSchema);
module.exports = About;
