'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise = global.Promise // deprecated messages

const UserSchema = require('./models/users.js');

const db = {
  users : mongoose.model('Users', UserSchema), // créer la collection Users et utiliser la variable users qui contient le model des users.js
  products : mongoose.model('Products', ProductSchema)
}
// const Users = db.users
// Users.find
// new Users()

module.exports = db;
