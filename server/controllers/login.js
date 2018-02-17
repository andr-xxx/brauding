const UserModel = require('../models/user');

const createNewUser = (req, res) => {
  const body = req.body;

  const newUser = new UserModel(body);

  newUser.save()
    .then(savedUser => {
      res.json(savedUser)
    })
    .catch(err => {
      res.send(err.message)
    })
};

const authorize = (req, res) => {
  const userDetails = req.body;

  if (userDetails.userName && userDetails.password) {
    UserModel.findOne({
      userName: userDetails.userName,
      password: userDetails.password
    })
      .then((user) => {
        if (!user) {
          res.json({
            message: 'incorrect user name or password',
            status: 204
          });
        } else {
          res.status(200).json({
            id: user._id,
            userName: user.userName,
            role: user.role
          });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      })
  } else {
    res.status(400);
    res.json({
      message: 'wrong credentials'
    })
  }
};

module.exports = {
  authorize,
  createNewUser
};