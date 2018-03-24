const DetailModel = require('../models/detail');
const TaskModel = require('../models/task');
const ProjectModel = require('../models/project');
const fillQueue = require('../helpers/fillQueue');

class Project {
  async createNewProject(req, res) {
    //todo remove models if failed
    const {name, description, details} = req.body;
    if (name && description && details) {
      const project = new ProjectModel({
        name,
        description
      });

      const projectId = project.id;

      try {
        for (const detail of details) {
          const newDetail = new DetailModel({
            name: detail.name,
            description: detail.description,
            project: projectId
          });

          project.details.push(newDetail.id);
          const detailId = newDetail.id;

          for (const [index, operation] of detail.operations.entries()) {
            const newTask = new TaskModel({
              name: operation.name,
              description: operation.description,
              machine: operation.machine,
              order: index,
              detail: detailId
            });
            newDetail.tasks.push(newTask.id);
            await newTask.save();
          }

          await newDetail.save();
        }

        await project.save();
        res.json({
          message: 'successfully saved',
          status: 200
        })
      } catch (err) {
        res.json({
          status: 400,
          message: err
        })
      }
    } else {
      res.json({
        status: 300,
        message: 'wrong input data, please check'
      })
    }
  }

  async updateProjectTime(req, res) {

  }

  getTask(req, res) {
    const detailId = req.params.id;

    DetailModel.findById({
      _id: detailId
    })
      .then(detail => {
        if (detail) {
          TaskModel.find({
            detail: detailId
          })
            .then(tasks => {
              if (tasks) {

                res.json({
                  ...detail._doc,
                  operations: tasks
                })
              }
            })
            .catch(err => {
              res.json(err)
            })
        }
      })
      .catch(err => {
        res.json(err)
      })
  };

  getProjectsList(req, res) {
    ProjectModel.getFullList()
      .then(response => {
        res.status(200).json({
          data: response
        })
      })
      .catch(err => {
        err.status(400).json({
          status: 400,
          message: 'something was wrong, please try again'
        })
      })
  }

  getProjectDetail(req, res) {
    const projectId = req.params.projectId;
    ProjectModel.getFullInformationById(projectId)
      .then(projectDetail => {
        res.status(200).json({
          status: 200,
          data: projectDetail
        });
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          message: 'something went wrong'
        });
      })

  }
}

module.exports = new Project();