const mongoose = require('mongoose');
import Education from '../../src/components/education';
const Schema = mongoose.Schema;
const resumeSchema = new Schema(
  {
    name: { type: String, default: '', trim: true, required: true },
    education: [{
      school: String,
      degree: String,
      fieldOfStudy: String,
      startYear: String,
      endYear: String,
      grade: String,
      activities: String,
      description: String
    }],
    experience: [{
      title: String,
      employment_type: String,
      company: String,
      location: String,
      startDate: String,
      endDate: String,
      currentlyWorking: Boolean,
      headline: String,
      description: String
    }],
    license: [{
      name: String,
      issuingOrg: String,
      expire: Boolean,
      issueDate: String,
      expirationDate: String,
      credentialID: String,
      credentialURL: String
    }],

    skills: [{
      name: String,
      experienceLevel: Number
    }],

    otherInfo: [{
      extras: String
    }],
    timestamp: { type: Date, default: new Date(), immutable: true }
  },
  { autoIndex: false }
);

const Resume = mongoose.model('Resume', resumeSchema);
module.exports = Resume;
