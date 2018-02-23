const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');

const createNewUser = (req, res) => {
  const {userName, password, role} = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  const newUser = new UserModel({
    userName,
    role,
    password: hashedPassword
  });

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
      userName: userDetails.userName
    })
      .then((user) => {
        if (!user) {
          res.json({
            message: 'incorrect user name',
            status: 204
          });
        } else {
          if (bcrypt.compareSync(userDetails.password, user.password)) {
            res.status(200).json({
              id: user._id,
              userName: user.userName,
              role: user.role
            });
          } else {
            res.json({
              message: 'incorrect password'
            });
          }
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