const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Users{
  createNewUser(req, res) {
    const {userName, password, role, firstName, secondName} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = new UserModel({
      firstName,
      secondName,
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

  authenticate(req, res) {
    const userDetails = req.body;

    if (userDetails.userName && userDetails.password) {
      UserModel.findOne({
        userName: userDetails.userName
      })
        .then((user) => {
          if (!user) {
            res.json({
              message: 'incorrect user name',
              status: 403
            });
          } else {
            if (bcrypt.compareSync(userDetails.password, user.password)) {

              const token = jwt.sign({role: user.role}, process.env.SECRET, {
                expiresIn: 86400
              });

              res.json({
                user: {
                  id: user._id,
                  firstName: user.firstName,
                  secondName: user.secondName,
                  userName: user.userName,
                  role: user.role,
                  token
                },
                status: 200
              });
            } else {
              res.json({
                message: 'incorrect password',
                status: 403
              });
            }
          }
        })
        .catch(err => {
          res.status(400).json(err);
        })
    } else {
      res.json({
        message: 'wrong credentials',
        status: 403
      })
    }
  };

  getAll(req, res) {
    UserModel.getAll()
      .then(users => {
        res.status(200).json({
          status: 200,
          users
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          message: err
        })
      })
  }

  remove(req, res) {
    const id = req.params.id;
    if (id) {
      UserModel.remove(id)
        .then(response => {
          res.json({
            status: 200,
            message: 'user deleted'
          })
        })
        .catch(err => {
          res.json({
            status: 400,
            message: err
          })
        })
    } else {
      res.json({
        status: 400,
        message: 'No id provided'
      })
    }
  }
}

module.exports = new Users();