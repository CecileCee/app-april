'user strict';

const UserModel = require('../../database').users;

const userController = {
  //METHODE FIND
  find : (req, res) => {
    // recette/opération sur la base de données
    UserModel.find()
    .then( data => {
      res.send('Operation success ::: ' + data);
    })
    .catch( err => {
      res.send('Operation failed ::: ' + err);
    });
  },
  //METHODE CREATE
  create : (req, res) => {
    const newUser = new UserModel(req.body);
    newUser.save()
    .then( data => {
      res.send('Operation success ::: ' + data);
    })
    .catch(err => {
      res.send('Operation failed ::: ' + err);
    });
  }
}

module.exports = userController;

// const Users = require('../../database').users;
// const Comments = require('../../database').comments;
// const Shops = require('../../database').shops;
//
// const users = {
//   //METHODE FIND
//   find : (req, res) => {
//     //recette opération sur la base de données
//     Users.find()
//     .then( data => {
//       res.send('Operation success ::: ' + data);
//     })
//     .catch( err => {
//       res.send('Operation failed ::: ' + err);
//     });
//   },
//   //METHODE CREATE
//   create : (req, res) => {
//     const user = new Users(req.body);
//     console.log(user);
//     user.save()
//     .then(data => {
//       res.send('Operation success ::: ' + data);
//     })
//     .catch (err => {
//       res.send('Operation failed ::: ' + err);
//     });
//   }
// };
//
// module.exports = users;
