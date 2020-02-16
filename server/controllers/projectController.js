const Projects = require('../models/project-model');
const ReadPreference = require('mongodb').ReadPreference;


function get(req, res) {
  const docquery = Projects.find({}).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, name, category, repo, preview, link, client, dateRange, description, dateString, timestamp } = req.body;

  const project = new Projects({ id, name, category, repo, preview, link, client, dateRange, description, dateString, timestamp });
  project
    .save()
    .then(() => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, name, category, repo, preview, link, client, dateRange, description, dateString, timestamp } = req.body;

  Projects.findOne({ id })
    .then(project => {
      project.id = id,
        project.name = name,
        project.category = category,
        project.repo = repo,
        project.preview = preview,
        project.link = link,
        project.client = client,
        project.dateRange = dateRange,
        project.description = description,
        project.dateString = dateString,
        project.timestamp = timestamp,
        project.save().then(res.json(project));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Projects.findOneAndRemove({ id })
    .then(project => {
      res.json(project);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
