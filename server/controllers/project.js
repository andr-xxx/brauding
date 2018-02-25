const DetailModel = require('../models/detail');
const TaskModel = require('../models/task');
const ProjectModel = require('../models/project');
const fillQueue = require('../helpers/fillQueue');

class Project {
  async createNewProject(req, res) {
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
}

module.exports = new Project();