const Users = require("../userModel");
const Auth = require("../../auth/authModel");
const generateToken = require("../../../token/token");

module.exports = {
  verifyUserExist,
  checkIfUserExist
};

async function verifyUserExist(req, res, next) {
  try {
    const { id } = await Users.findById(req.params.id);
    id ? next() : res.status(400).json({ message: "No by with that ID" });
  } catch (err) {
    res.status(400).json({ message: "No user by that ID" });
  }
}

function checkIfUserExist(req, res, next) {
  registeruser = req.body;
  if (req.body.email) {
    Auth.findByEmail(req.body.email)
      .then(user => {
        if (user) {
          next();
        } else {
          registeruser.username =
            req.body.username || req.body.email.replace(/@.*/, "");
          Auth.add(registeruser)
            .then(newUser => {
              const token = generateToken(newUser);
              res.status(201).json({
                message: `welcome ${newUser.username}!`,
                newUser,
                token
              });
            })
            .catch(error => {
              res.status(500).json(error);
            });
        }
      })
      .catch(err => {
        res.status(500).json({ err, message: "error finding user by email" });
      });
  } else if (!req.body.email) {
    res.status(400).json({ message: "Please provide a email" });
  }
}
