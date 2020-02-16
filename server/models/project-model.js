const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const projectSchema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, default: '', trim: true, display: true },
    category: { type: String, default: '' },
    repo: { type: String, default: '', immutable: true },
    preview: { type: String, default: '' },
    link: { type: String, default: '' },
    client: { type: String, default: '' },
    dateRange: { type: String, default: '' },
    description: { type: String, default: '', isHtml: true },
    dateString: { type: String, default: '', immutable: true },
    timestamp: { type: Date, default: new Date(), immutable: true }
  },
  { autoIndex: false }
);

const Projects = mongoose.model('Projects', projectSchema);
module.exports = Projects;
