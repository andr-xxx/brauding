const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class Login{
  createNewUser(req, res) {
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
}

module.exports = new Login();