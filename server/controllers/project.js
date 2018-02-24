const DetailModel = require('../models/detail');
const TaskModel = require('../models/task');
const ProjectModel = require('../models/project');

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
        await project.save();

        details.forEach(async detail => {
          const newDetail = new DetailModel({
            name: detail.name,
            description: detail.description,
            project: projectId
          });

          const detailId = newDetail.id;
          await newDetail.save();

          detail.operations.forEach(async (operation, index)=> {
            const newTask = new TaskModel({
              name: operation.name,
              description: operation.description,
              order: index,
              detail: detailId
            });

            await newTask.save()
              .then(() => {
                res.json({
                  message: 'successfully saved',
                  status: 200
                })
              })
          })
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