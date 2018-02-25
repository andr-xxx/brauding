const router = require('express').Router();
const ProjectModel = require('../models/project');
const DetailModel = require('../models/detail');

router.get('/', (req, res) => {
  ProjectModel.getFullInformationById('5a929bcb335cfd37806359f9')
    .then( data => {
      res.json(data);
      console.log()
    })
    .catch(err => {
      res.json(err);
      console.log()
    })

  // DetailModel.getFullInformationById('5a915e9573bb3e08b029a146')
  //   .then(data => {
  //     res.json({
  //       data
  //     })
  //   })
});

module.exports = router;