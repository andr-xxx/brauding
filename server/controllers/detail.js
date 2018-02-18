const DetailModel = require('../models/detail');
const TaskModel = require('../models/task');

const createNewProject = (req, res) => {
  const {name, description} = req.body;

  if (name && description) {
    const newDetail = new DetailModel({
      name,
      description
    });
    const detailId = newDetail.id;

    newDetail.save()
      .then(result => {
        const oprerations = req.body.operations;

        Promise.all(oprerations.map((task, index) => {
          const newTask = new TaskModel({
            name: task.name,
            description: task.description,
            order: index,
            detail: detailId
          });

          return newTask.save();
        }))
          .then(result => {
            console.log(result);

            res.json({
              message: 'success saved'
            })
          })
          .catch(err => {
            res.json(err)
          });
      })
      .catch(err => {
        res.json(err)
      });

  } else {
    res.json({
      message: 'wrong details'
    })
  }
};

module.exports = {
  createNewProject
};